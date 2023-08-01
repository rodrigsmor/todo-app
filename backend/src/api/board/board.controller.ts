import { BoardService } from './board.service';
import { BoardCreateDto, BoardSummaryDto } from './dto';
import { BoardWithColumns } from '../../utils/@types/board.types';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserId } from '../../common/decorators/get-user-id.decorator';

@Controller('/api/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/')
  async getUserBoards(@UserId() userId: number): Promise<BoardSummaryDto[]> {
    return this.boardService.getUserBoards(userId);
  }

  @Get('/:id')
  async getBoard(
    @UserId() userId: number,
    @Param('id') boardId: number,
  ): Promise<BoardWithColumns> {
    return this.boardService.getBoard(userId, boardId);
  }

  @Post('/')
  async createNewBoard(
    @UserId() userId: number,
    @Body() newBoard: BoardCreateDto,
  ): Promise<BoardSummaryDto> {
    return this.boardService.createNewBoard(userId, newBoard);
  }
}
