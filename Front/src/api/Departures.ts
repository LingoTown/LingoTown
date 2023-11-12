export const departures = [
	{
		time : "12:40",
		destination : "Las Vegas",
		Flight : "KA4701",
		Gate : "A56",
		flag : import.meta.env.VITE_S3_URL + "Picture/flag/us.jpg",
		Status : "Boarding",
		language : "US"
	}
	,
	{
    time : "12:55",
    destination : "Shanghai",
    Flight : "LT201",
    Gate : "C33",
		flag : import.meta.env.VITE_S3_URL + "Picture/flag/china.jpg",
    Status : "Cancelled",
    language : "Chinese"
	}
	,
	{
    time : "13:10",
    destination : "Manchester",
    Flight : "LT3307",
    Gate : "C55",
		flag : import.meta.env.VITE_S3_URL + "Picture/flag/uk.jpg",
    Status : "Boarding",
    language : "UK"
	}
	,
	{
    time : "13:25",
    destination : "Tokyo",
    Flight : "KA5513",
    Gate : "A12",
		flag : import.meta.env.VITE_S3_URL + "Picture/flag/japan.jpg",
    Status : "Cancelled",
    language : "Japanese"
	}
	,
	{
    time : "13:40",
    destination : "Paris",
    Flight : "LM4707",
    Gate : "F53",
		flag : import.meta.env.VITE_S3_URL + "Picture/flag/france.jpg",
    Status : "Boarding",
    language : "FR"
	}
	,
	{
    time : "14:15",
    destination : "Barcelona",
    Flight : "KA801",
    Gate : "C73",
		flag : import.meta.env.VITE_S3_URL + "Picture/flag/spain.jpg",
    Status : "Cancelled",
    language : "Spanish"
}]