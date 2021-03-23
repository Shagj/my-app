import { useParams } from "react-router";
export default function About() {
	let { sdid } = useParams();
	return <div>StudentDetail page {sdid}</div>;
}
