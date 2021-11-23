// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const SC_HOME = 'sc_home/HOME' as const;
const SC_CONTACT = 'sc_contact/CONTACT' as const;
const SC_PROJECT = 'sc_project/PROJECT' as const;

// 액션 생성함수를 선언합니다
export const sc_home = () => ({
  type: SC_HOME
});

export const sc_contact = () => ({
  type: SC_CONTACT
});

export const sc_project = () => ({
    type: SC_PROJECT
  });

// 모든 액션 객체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
type CounterAction =
  | ReturnType<typeof sc_home>
  | ReturnType<typeof sc_contact>
  | ReturnType<typeof sc_project>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type Change_Scene = {
  clsname: string;
};

// 초기상태를 선언합니다.
const initialState: Change_Scene = {
  clsname: 'Home_Scenes'
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.
function Scene_Changer(
  state: Change_Scene = initialState,
  action: CounterAction
): Change_Scene {
  switch (action.type) {
    case SC_HOME: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
      return { clsname: 'Home_Scenes'};
    case SC_CONTACT:
      return { clsname: 'contact_Scene' };
    case SC_PROJECT:
      return { clsname: 'Project_Scenes' };
    default:
      return state;
  }
}

export default Scene_Changer;