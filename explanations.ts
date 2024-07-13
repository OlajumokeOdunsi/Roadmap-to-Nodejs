// ./ means current directory
why do we use callback so much in nodejs
So basically node.js is single threaded why is this,
 it is because lets say a user is trying to login another user is trying to check some data and other user is also trying to do another thing,
  beacuse nodemon.js it happens one after the other
  which means that a user will wait for another user which is  synchronous  more reason why node.js uses asynchronous
  do you get?

  so when each user is doing its stuff either login or logout some other function is being take place, other user too is also doing his/her stuff

  So Node.js uses asynchronous 