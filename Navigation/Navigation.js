import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from '@react-navigation/stack'

import Search from '../pages/search'

const SearchStackNavigator = createStackNavigator({
    Search:{
        screen: Search,
        navigationOptions: {
            title: 'Search'
        }
    }
})

export default createAppContainer(SearchStackNavigator)