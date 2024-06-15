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

orderCake((cake) => {
  inviteFriends((friends) => {
    decorate(() => {
      console.log("Party is ready with", cake, "and", friends);
    });
  });
});
