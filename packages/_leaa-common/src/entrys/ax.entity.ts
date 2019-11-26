import { Index, Entity, Column } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { AxAttachmentsObject } from '@leaa/common/src/dtos/ax';

import { Base } from '@leaa/common/src/entrys';

@Entity('axs')
@Index('axs_title_unique', ['title'], { unique: true })
@Index('axs_slug_unique', ['slug'], { unique: true })
@ObjectType()
export class Ax extends Base {
  @Column({ type: 'varchar', length: 32, unique: true })
  @Field(() => String)
  title!: string;

  @Column({ type: 'varchar', length: 32, unique: true, default: null })
  @Field(() => String, { nullable: true })
  slug?: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  description?: string;

  @Column({ type: 'int', default: 0 })
  @Field(() => Int, { nullable: true })
  status?: number;

  // Virtual Field (not in DB)
  @Field(() => AxAttachmentsObject, { nullable: true })
  attachments?: AxAttachmentsObject;
}
