# Cryptocurrency
Simple cryptocurrency app with React and Redux

Hello there.
This simple app uses a react from scratch config! yes I know it's easier to use a create-react-app but I prefer use to install it from zero in order to handle better the Webpack config and all of that stuff.

## Installation and run

#### Installation:
I decided to use **yarn**. ``yarn install`` but you can do a simple ``npm install`` run to install it.

#### Running:
You can use ``yarn start`` or ``npm start`` to start the program. (take into account you must have internet connection to use the app)

**Basic modules**
The main libs that app uses are:  
* React.  
* Redux.  
* Antd.  
* SASS. 

**API** the Webapp uses the [coinMarketCap](https://coinmarketcap.com/api/) API to handle the cryptocurrency data but this only accepts **300 request per day**: _A great power comes great responsibility!_

**API KEY** this is stored in ``rootApp/.env`` file if you want to put yours there.

**CORS and other stuff** :smile:
To avoid the horrible thing _In dev environments_ I used the [CORS anywhere](https://cors-anywhere.herokuapp.com/) to bypass it. _please guarantee this boy to access the app_ :)

#### Testing:
With _jest_ and _jasmine_

#### For Designing and beauty things:
I'm using [Ant Design](https://ant.design/) beauty, simple and clear.

### At the end...
This small app only uses __hooks__ and it is only for testing purposes. Feel free to add some comments. :)