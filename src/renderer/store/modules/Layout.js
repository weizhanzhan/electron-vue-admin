const state = {
    Folders: [
        {
            key: 1,
            label: '文件夹1',
            empty: false
        },
        {
            key: 2,
            label: '文件夹2',
            empty: false
        },
        {
            key: 3,
            label: '文件夹3',
            empty: false
        }
    ],
}
  
const mutations = {
    ADD_FOLDER(state,data){
        if(data){
            let newData = {...data}
            newData.empty = false
            newData.label = newData.key
            state.Folders.push(newData)
        }  
    },
    REFRESH_FOLDER(state,folders){
        // let start = state.Folders.find(folder =>{
        //     return folder.key == folders.start.item.key
        // })
        // start.key = folders.end.item.key

        // let end = state.Folders.find(folder =>{
        //     return folder.key == folders.end.item.key
        // })
        // end = folders.start.item
      
       // console.log(start)
    }
}

const actions = {

    addFolder( { commit },folder) {     
        commit('ADD_FOLDER',folder)
    },
    refreshFolder( { commit },folders) {
     
        commit('REFRESH_FOLDER',folders)
    }
}

export default {
    state,
    mutations,
    actions
}
  