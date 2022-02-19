from brownie import TrentonsAnAsshole
from scripts.helpful_scripts import get_account
from web3 import Web3


initial_supply = Web3.toWei(1000, "ether")


def deploy_token():
    account = get_account()
    trentons_an_asshole = TrentonsAnAsshole.deploy(initial_supply, {"from": account})
    print("Deployed Token!")

def main():
    deploy_token()