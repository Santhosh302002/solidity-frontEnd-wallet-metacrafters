const { frontEndContractsFile, frontEndAbiFile } = require("../hardhat-helpher-config")
const fs = require("fs")
const { network } = require("hardhat")
const { ethers } = require("hardhat")


module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        // await updateContractAddresses()
        await updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {
    const Bank = await ethers.getContract("Bank")
    console.log(Bank.interface.formatJson())
    fs.writeFileSync(frontEndAbiFile, Bank.interface.formatJson())
}

async function updateContractAddresses() {
    const Bank = await ethers.getContract("Bank")
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (network.config.chainId.toString() in contractAddresses) {
        if (!contractAddresses[network.config.chainId.toString()].includes(Bank.address)) {
            contractAddresses[network.config.chainId.toString()].push(Bank.address)
        }
    } else {
        contractAddresses[network.config.chainId.toString()] = [Bank.address]
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "Bank"]