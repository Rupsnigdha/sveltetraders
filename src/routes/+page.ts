export const load = ({ fetch }) => {
	const getAgent = async () => {
		const res = await fetch('/api/agents/getAgent');
		const data = await res.json();
		return data;
	};

	return {
		agentData: getAgent()
	};
};
