import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class HelloPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log('value:', value);
    const ageNumber = parseInt(value, 10);
    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number ', HttpStatus.BAD_REQUEST);
    }
    return ageNumber;
  }
}
