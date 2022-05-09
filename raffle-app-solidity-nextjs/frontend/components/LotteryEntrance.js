import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/abi.json"
import { useEffect, useState } from "react";

const CONTRACT_ADDRESS = "0x4e52E5Be988bB00E2184546b0904fDD9A660f6BD"

export default function LotteryEntrance() {
    const { isWeb3Enabled } = useMoralis
    const [recentWinner, setRecentWinner] = useState("0")
    const [numPlayers, setNumPlayers] = useState("0")

    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "enterRaffle",
        msgValue: "100000000000000000", // 0.1ETH
        params: {}
    })

    // View Functions
    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "s_recentWinner",
        params: {}
    })

    useEffect(() => {
        async function updateUI() {
            const recentWinnerFromCall = await getRecentWinner()
            setRecentWinner(recentWinnerFromCall)
        }
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])


    return (
        <div>
            <button onClick={async () => {
                await enterRaffle()
            }}>Enter Lottery</button>
            <div>
                The Recent Winner Was: {recentWinner}
            </div>
        </div>
    )
}
