import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CreateAttachmentInput {
  @Field(() => String)
  uuid!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  alt!: string;

  @Field(() => String)
  type!: string;

  @Field(() => String)
  filename!: string;

  // @Field(() => String, { nullable: true })
  // description?: string;

  // @Field(() => String, { nullable: true })
  // link?: string;

  @Field(() => String)
  moduleName!: string;

  @Field(() => Int)
  moduleId!: number;

  @Field(() => String)
  moduleType!: string;

  @Field(() => String)
  ext!: string;

  @Field(() => Int)
  width!: number;

  @Field(() => Int)
  height!: number;

  @Field(() => Int)
  size!: number;

  @Field(() => String)
  path!: string;

  @Field(() => String, { nullable: true })
  external_url?: string;

  @Field(() => Int)
  at2x!: number;

  @Field(() => Int)
  in_local!: number;

  @Field(() => Int)
  in_oss!: number;

  @Field(() => Int, { nullable: true })
  category_id?: number | null;

  @Field(() => Int, { nullable: true })
  user_id?: number | null;

  @Field(() => Int)
  sort!: number;

  @Field(() => Int)
  status!: number;
}
