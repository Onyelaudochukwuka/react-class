import { useParams } from "react-router-dom";

const Home = () => {
    const { Some } = useParams();
    console.log(Some);
    return (
        <div>
            Home
        </div>        
     );
}
 
export default Home;