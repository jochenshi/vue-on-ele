/**
 * Created by Jincheng on 2017/5/12.
 */
import fetch from '../configs/fetch'

var getProduct = () => fetch('GET', '', {})

var getUser = () => fetch('GET', '/v1/user/', {})

var getActivity = () => fetch('GET', 'v1/activity/', {})

export {getProduct, getUser, getActivity}
