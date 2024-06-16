export function orderPizza(callback: (message: string) => void) {
  // send order to pizza shop
  // baking of pizza
  // delivering pizza
  callback("Pizza delivered");
}

export function pizzaDelivered(message: string) {
  console.log(message);
}

orderPizza(pizzaDelivered);

orderCake((cake, error) => {
  console.log(error);
  inviteFriends((friends, error) => {
    console.log(error);
    decorate((error) => {
      console.log(error);
      console.log("Party is ready with", cake, "and", friends);
    });
  });
});
