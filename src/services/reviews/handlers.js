export const list = (req, res, next) => {
    try {
        res.send("ok");
    } catch (error) {
        res.status(500).send(error);
    }
};