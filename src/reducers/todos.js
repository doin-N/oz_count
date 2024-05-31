
const todos = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.text]
            //배열안에 얕은 복사로 하나를 넣어줌으로 이전데이터를 변경하지 않고 새로운 데이터 생성
        default:
            return state;
        
    }
}

export default todos;