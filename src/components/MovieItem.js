import { Link } from "react-router-dom";

export const MovieItem = ({title , id}) => (
    <section>
        <li>
            <Link to={`movies/${id}`}>{title}</Link></li>   
    </section>
);