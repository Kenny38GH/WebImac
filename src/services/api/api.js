const getAgentData = async function () {
    const response = await fetch("https://valorant-api.com/v1/agents") 
    if (response.status == 200) {
        const data = await response.json()
        const result = data.data.filter(agent => agent.isPlayableCharacter);
        return result
        // console.log(await response.json())
    }
    else {
        new Error(response.statusText)
    }
}

export default getAgentData