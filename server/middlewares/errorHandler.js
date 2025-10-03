import ApiError from "../error/apiError.js";

function errorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }

    console.error(err);
    return res.status(500).json({ message: "Непредвиденная ошибка!" });
}

export default errorHandler;
