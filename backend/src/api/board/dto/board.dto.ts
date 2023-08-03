import { UserDto } from '../../user/dto/user.dto';
import { ColumnType } from '../../../utils/@types/column.type';
import { BoardPrismaType } from '../../../utils/@types/payloads.type';

export class BoardDto {
  id: number;
  name: string;
  background?: string;
  description?: string;
  isPinned: boolean;
  createdAt: Date;
  updateAt: Date;
  columns: ColumnType[];
  owner: UserDto;
  members: Array<UserDto>;

  constructor(board: BoardPrismaType) {
    this.id = board.id;
    this.name = board.name;
    this.background = board.background;
    this.description = board.description;
    this.isPinned = board.isPinned;
    this.createdAt = board.createdAt;
    this.updateAt = board.updateAt;
    this.columns = board.columns.map((column) => new ColumnType(column));
    this.owner = UserDto.fromUser(board.owner);
    this.members = board.members.map(({ user }) => UserDto.fromUser(user));
  }
}
