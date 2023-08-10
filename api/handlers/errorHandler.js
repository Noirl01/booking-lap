const errorHandler = (app, handler) => {
  app.use((req, res, next) => {
    handler(req);
    return res.status(next.status).json(next.error || 500);
  });
};

export default errorHandler;
