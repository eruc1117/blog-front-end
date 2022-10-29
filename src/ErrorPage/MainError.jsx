import { useRouteError } from "react-router-dom";

export default function MainError() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="mt-5 mx-auto w-50 d-flex flex-column justify-content-center text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
