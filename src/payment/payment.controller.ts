import { Controller, Get, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserReq } from '@/common/decorator/user.decorator';
import { User } from '@/users/entity/user.entity';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiBearerAuth()
  @Get('/:id')
  createPayment(@Param('id') orderId: string, @UserReq() currentUser: User) {
    return this.paymentService.create(orderId, currentUser);
  }
}
