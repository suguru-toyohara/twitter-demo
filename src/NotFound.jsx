import { Link } from "react-router-dom"

const NotFound = () => {
    return(
    <>
        <h1>404 Notfound</h1>
        <h3>お探しのページは見つかりませんでした。</h3>
        <Link to="/">こちら</Link>
    </>
    )
}

export default NotFound
