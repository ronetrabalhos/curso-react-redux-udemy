export function changeValue(e) {
    //console.log('[ fieldActions ] Acessou a function changeValue')

    return{
        type    : 'VALUE_CHANGED',
        payload : e.target.value
    }

}