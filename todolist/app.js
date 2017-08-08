/**
 * Created by yanhaoqi on 2017/8/8.
 */
const koa = require('koa');
const app = new koa();

app.use(async (ctx,next) => {
  let start = new Date;
  next();
  let ms = new Date - start;
  console.log(ctx.request.method,ctx.request.url,ms);
});
app.on('error',function(err,ctx){
  console.log('server err======',err);
});
app.listen(3000,() => {
  console.log('server is starting===========');
});
module.exports = app;
