import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";
import abi from "../constants/abi.json";
import styles from "../styles/Home.module.css"



export default function Bank() {
    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const dispatch = useNotification()
    // console.log(`ChainId is ${chainId}`)
    // console.log(abi)
    const BankAddress = "0x20651BD42Aae795636b68d8F95FeC2841c4D361A"

    const [depositAmount, setdepositAmount] = useState("0");
    const [TotalAmount, setTotalAmount] = useState("0")
    const [AccountBalance, setAccountBalance] = useState("0")

    const {
        runContractFunction: deposit,
        data: enterTxResponse,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: BankAddress,
        functionName: "deposit",
        msgValue: depositAmount,
        params: { amount: depositAmount },
    })

    const {
        runContractFunction: withDraw,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: BankAddress,
        functionName: "withDraw",
    })

    const {
        runContractFunction: balanceAmount,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: BankAddress,
        functionName: "balanceAmount",
    })

    const {
        runContractFunction: totalAmount,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: BankAddress,
        functionName: "totalAmount",
    })

    async function updateUIValues() {
        setdepositAmount((depositAmount).toString())
        const account = (await balanceAmount()).toString()
        const totalBankAmount = (await totalAmount()).toString()
        setAccountBalance(account)
        setTotalAmount(totalBankAmount)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])


    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Transaction Notification",
            position: "topR",
            icon: "bell",
        })
    }

    const handleSuccess = async (tx) => {
        try {
            await tx.wait(1)
            updateUIValues()
            handleNewNotification(tx)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={styles.card}>
            <div className={styles.Bannner}>
                <h1 className={styles.name} >Wallet Bank </h1>
                {BankAddress ? (
                    <>
                        <div className={styles.deposit}>
                            <div>Enter the Amount  :</div>
                            <input id="input" onChange={(e) => setdepositAmount(e.target.value)}></input>
                        </div>
                        <button className={styles.button} onClick={async () =>
                            await deposit({
                                // onComplete:
                                // onError:
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })} >Enter </button>
                        <div>
                            <div className={styles.withDraw}>
                                <div className={styles.amount}>WithDraw Amount :</div>
                                <button className={styles.button} onClick={async () =>
                                    await withDraw({
                                        onSuccess: handleSuccess,
                                        onError: (error) => console.log(error),
                                    })} >WithDraw</button>
                            </div>
                        </div>
                        <div className={styles.accountBal}>
                            Account Balance :{ethers.formatEther(AccountBalance)}
                        </div>
                        <div className={styles.Balyour}>
                            Bank Balance :{ethers.formatEther(TotalAmount)}
                        </div>

                    </>
                ) : (
                    <div>Please connect to a supported chain </div>
                )
                }
            </div>
        </div >
    );
}
