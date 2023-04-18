import { configureStore } from '@reduxjs/toolkit'
import deployFile from '../slice/deployFile'
import getAllProduct from "../slice/productGet"
import permissionsGet from "../slice/premissions/permissionsGet"
import shopGet from '../slice/shop/shopGet/index.js'
import roleGet from '../slice/role/roleGet/index.js'
import ordersGet from '../slice/orders/ordersGet/index.js'
import categoryGet from "../slice/category/category/index.js"
import loginPost from '../slice/admin/login/index.js'
import messageSlice from "../slice/message/index.js"
import permissionPost from "../slice/premissions/premissionsCreate/create.js"
import permissionsDelete from "../slice/premissions/permissionsDelete/index.js"
import permissionPut from "../slice/premissions/premissionsPut/update.js"
import adminGet from "../slice/admin/adminGet/index.js"
import adminDelete from "../slice/admin/adminDelete/index.js"
export default configureStore({
    reducer: {
        deployFile,
        getAllProduct,
        permissionsGet,
        permissionPost,
        permissionsDelete,
        permissionPut,
        shopGet,
        roleGet,
        ordersGet,
        categoryGet,
        loginPost,
        messageSlice,
        adminGet,
        adminDelete,

    },
})