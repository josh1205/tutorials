from brownie import accounts, network, config, interface
from web3 import Web3


FORKED_LOCAL_ENVIRONEMENTS = ["mainnet-fork", "mainnet-fork-dev"]
LOCAL_BLOCKCHAIN_ENVIRONMENTS = ["development", "ganache-local"]

DECIMALS = 18
STARTING_PRICE = 200000000


def get_account(index=None, id=None):
    # account[0]
    # accounts.add("env")
    # accounts.load("id")
    if index:
        return accounts[index]
    if id:
        return accounts.load(id)
    if (
        network.show_active() in LOCAL_BLOCKCHAIN_ENVIRONMENTS
        or network.show_active() in FORKED_LOCAL_ENVIRONEMENTS
    ):
        return accounts[0]
    return accounts.add(config["wallets"]["from_key"])

