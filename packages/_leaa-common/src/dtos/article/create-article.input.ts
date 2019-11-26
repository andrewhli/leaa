import { IsNotEmpty, IsOptional } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CreateArticleInput {
  @IsNotEmpty()
  @Field(() => String)
  title!: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  slug?: string;

  @IsOptional()
  @Field(() => [Int], { nullable: true })
  categoryIds?: number[];

  @IsOptional()
  @Field(() => Int, { nullable: true })
  user_id?: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  content?: string;

  @IsNotEmpty()
  @Field(() => Int)
  status!: number;
}
