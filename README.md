# Bank Smart Contract Application

This repository contains a React application that interacts with an Ethereum smart contract for a basic bank system. Users can deposit and withdraw funds from the bank, and the application displays the account balance and total bank balance.

## Prerequisites

Before running the application, make sure you have the following dependencies installed:

- React framework
- Moralis library
- web3-react library
- web3uikit library
- ethers.js library

## Getting Started

To run the application, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install the dependencies:

   ```bash
   cd your-repo
   yarn add
   ```

3. Configure the Moralis and web3-react libraries with your Ethereum network provider and other necessary settings. Refer to their documentation for detailed instructions.

4. Customize the `BankAddress` variable in the `Bank.js` file with the address of your deployed bank smart contract.

5. Start the React development server:

   ```bash
   yarn run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

The Bank application provides the following features:

- Deposit Funds: Enter an amount and click the "Enter" button to deposit funds into the bank.
- Withdraw Funds: Click the "Withdraw" button to withdraw your account balance from the bank.
- Account Balance: The current account balance is displayed.
- Bank Balance: The total amount of funds held by the bank is displayed.

Customize the UI and event handling logic in the `Bank.js` file to fit your specific requirements.

## Contributing
### L Santhosh Kumar(l.santhoshkumar30@gmail.com)
Contributions to this repository are welcome. If you have any improvements or bug fixes, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](LICENSE) file for more information.
