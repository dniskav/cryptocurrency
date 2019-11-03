# Cryptocurrency
Simple cryptocurrency app with React and Redux

Hello there, this simple app uses, a react from scratch config yes I know is more easy use a create-react-app but I prefer use to manage better the Webpack config and stuff like that.

## Installation and run

**installation** I prefer to use **yarn**. ``yarn install`` but you can use a simple ``npm install`` to run install it.

**run** you can use ``yarn start`` or ``npm start`` to star the application. (take into account you must have internet connection to use the app)

**Basic modules**
The main libs that app uses are:  
* React.  
* Redux.  
* Antd.  
* SASS. 

**API** the app uses the [coinMarketCap](https://coinmarketcap.com/api/) API to handle the cryptocurrency data but this only accepts **300 request per day**: _With great power comes great responsibility._

**API KEY** this is stored in ``rootApp/.env`` file if you wants put yours there.

**CORS and other stuff** :smile:
To avoid the horrible thing _In dev environments_ I used the [CORS anywhere](https://cors-anywhere.herokuapp.com/) to bypass it. _please guarantee this boy access to the app_ :)

**test** it is not ready yet. I need config _jest_,  _jasmine_ and _babel_ to use it :(

**Design and beauty things**
I'm using [Ant Design](https://ant.design/) beauty, simple and clear.

### At the end...
This small app only uses __hooks__ and is only for testing purposes. feel free to add some comments. :)
