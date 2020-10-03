This project was bootstrapped with Create React App

in your terminal navigate to the path of application, then type:

npm install

after that:

npm start

To check how application works, press F12 and check what happened in console.

1. Press "Rozpocznij",
2. Choose your movie and date and click on it. Date are not converted to user friendly format (it is easy to be changed)
3. Pres "Dalej"
4. You will see seats. Green are free and red are busy. Check your console, you can see prevvious state, the action and next state. You can choose many places but only green. For now there is no functionality that add some class to to choosen seat, or remove it when you press second time (this is easy anyway). Also currently you can choose 2 times one seat but as you have prepared and connected redux store and you know redux, it is extremaly easy to be fixed.
5. pres "Zarezerwuj miejsce" - you will make reservation of your seat, showing date and movie title. Also you will receive token that you use in point 6.
6. press "Zaplac" token will be send to server and you will receive back payment response and you can see its status.

Application isn't finished yet, but the most important and the most difficult issue are done.
