import { connect } from 'react-redux'
import { toggleIntroduction, setCurrentPlayer, setGameStatus, initBoard, insertToken } from '../../actions'
import Game from './Game.jsx'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    board: state.board.board,
    ready: state.board.ready,
    gameStatus: state.game.status,
    currPlayer: state.game.currPlayer,
    showIntroduction: state.introduction.show,
    player1: state.settings.player1,
    player2: state.settings.player2,
    colNum: state.settings.colNum,
    rowNum: state.settings.rowNum,
    lineLength: state.settings.lineLength,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleIntroduction: () => dispatch(toggleIntroduction()),
  setCurrentPlayer: (num) => dispatch(setCurrentPlayer(num)),
  setGameStatus: (status) => dispatch(setGameStatus(status)),
  initBoard: (board) => dispatch(initBoard(board)),
  insertToken: (board) => dispatch(insertToken(board))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
