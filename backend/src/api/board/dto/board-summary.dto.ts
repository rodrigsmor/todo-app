import { UserDto } from '../../user/dto/user.dto';
import { BoardWithColumns } from '../../../utils/@types/board.types';
import { getAmountOfCards } from '../../../utils/functions/get-amount-of-cards';

export class BoardSummaryDto {
  id: number;
  name: string;
  updateAt: Date;
  owner: UserDto;
  createdAt: Date;
  isPinned: boolean;
  description: string;
  amountOfCards: number;
  membersAmount: number;

  constructor(board: BoardWithColumns) {
    this.id = board.id;
    this.amountOfCards = getAmountOfCards(board.columns);
    this.name = board.name;
    this.membersAmount = 1;
    this.isPinned = board.isPinned;
    this.updateAt = board.updateAt;
    this.createdAt = board.createdAt;
    this.description = board.description;
    this.owner = UserDto.fromUser(board.owner);
  }
}
