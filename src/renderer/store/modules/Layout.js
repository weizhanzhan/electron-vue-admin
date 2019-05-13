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
            let item = state.Folders.find(folder =>{
                return folder.key == data.key
            })
            if(item){
                item.empty = false
                item.label = 'new Folder'
            }else{
                let newData = {...data}
                newData.empty = false
                newData.label = 'new Folder'
                state.Folders.push(newData)
            }      
        }  
    },
    REFRESH_FOLDER(state,folders){
        let start,end
        start = state.Folders.find(folder =>{
            return folder.key == folders.start.item.key
        })
        end = state.Folders.find(folder =>{
            return folder.key == folders.end.item.key
        })
     
        start.key = folders.end.item.key
     
        if(end){//start 和end 都存在 表示两者互换
            if(end.empty){//当被替换的是个空的格子
                end.key = folders.start.item.key
            }else{//当被替换的是个存在的folder
                end.key = folders.start.item.key
                end.empty = folders.start.item.empty
            }
        }else{//被替换者 在vuex中不存在的时候
            let enditem  = {...folders.end.item}
            enditem.key = folders.start.item.key
            state.Folders.push(enditem)
        }
      
        
       
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
  