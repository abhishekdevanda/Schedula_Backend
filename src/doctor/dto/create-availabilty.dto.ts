import {
  IsString,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  IsDate,
  IsInt,
  Min,
  IsOptional,
} from 'class-validator';
import { Session, Weekday } from '../enums/availability.enums';
import { Type } from 'class-transformer';

export class CreateDoctorAvailabilityDto {
  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsString()
  start_time: string;

  @IsString()
  end_time: string;

  @IsEnum(Session)
  session: Session;

  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(Weekday, { each: true })
  weekdays: Weekday[];

  @IsInt()
  @Min(5) // Minimum 5 minutes
  slot_duration: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  patients_per_slot?: number;
}
