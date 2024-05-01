import { useLoaderData } from "react-router-dom";
import ListItem from "./ListItem";

const Listed = () => {
     const travels = useLoaderData();
    return (
        <div className="m-20 grid md:grid-cols-1 lg:grid-cols-3 gap-5">
           
           {
            travels.map(travel => <ListItem key={travel._id} travel={travel}></ListItem>)
           }
        </div>
    );
};

export default Listed;