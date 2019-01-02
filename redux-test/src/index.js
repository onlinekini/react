const Redux = require('redux')


const createPolicy = (name, amount) => {
    return {
        type:'CREATE_POLICY',
        payload : {
            name: name,
            amount:amount
        }
    }
}

const createClaim = (name, amount) => {
    return {
        type : 'CREATE_CLAIM',
        payload : {
            name: name,
            claimAmount:amount
        }
    }
}

const deletePolicy = (name) => {
    return {
        type : 'DELETE_POLICY',
        payload : {
            name: name
        }
    }
}

const claimsHistory = (oldClaimList=[], action) => {
    if(action.type === 'CREATE_CLAIM') {
        // We care about this action
        return [...oldClaimList, action.payload]
    }

    return oldClaimList
}

const accounting = (moneyBag = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return moneyBag - action.payload.claimAmount
    } else if (action.type === 'CREATE_POLICY') {
        return moneyBag + action.payload.amount
    }
    return moneyBag
}

const policies = (policyList = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...policyList, action.payload.name]
    } else if (action.type === 'DELETE_POLICY') {
        return policyList.filter( name => {return name !== action.payload.name} )
    }

    return policyList
}

const {combineReducers, createStore} = Redux

const ourDepartments = combineReducers({
    accounting : accounting,
    claimsHistory : claimsHistory,
    policies : policies
})

const store = createStore(ourDepartments)

store.dispatch(createPolicy('Alex', 200))
store.dispatch(createPolicy('Daisy', 100))
store.dispatch(createPolicy('Bob', 100))
console.log(store.getState())

store.dispatch(createClaim('Alex', 99))
console.log(store.getState())

store.dispatch(deletePolicy('Bob'))
console.log(store.getState())