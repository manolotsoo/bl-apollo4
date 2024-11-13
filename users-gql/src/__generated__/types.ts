import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateProfileInput = {
  name: Scalars['String']['input'];
  user: UserCreateProfileInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProfile?: Maybe<Profile>;
  createUser?: Maybe<User>;
  deleteProfile?: Maybe<Profile>;
  deleteUser?: Maybe<User>;
  signIn?: Maybe<Scalars['String']['output']>;
  signUp?: Maybe<User>;
  updateProfile?: Maybe<Profile>;
  updateUser?: Maybe<User>;
};


export type MutationCreateProfileArgs = {
  input?: InputMaybe<CreateProfileInput>;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteProfileArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: UserInput;
};


export type MutationUpdateProfileArgs = {
  input?: InputMaybe<UpdateProfileInput>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UserInput;
};

export type Profile = {
  __typename?: 'Profile';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type ProfileInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  profileById?: Maybe<Profile>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  test?: Maybe<Scalars['String']['output']>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
  userByToken?: Maybe<UserTokenized>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryProfileByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserByTokenArgs = {
  token: Scalars['String']['input'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateProfileInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  user: UserCreateProfileInput;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  profile?: Maybe<Profile>;
};

export type UserCreateProfileInput = {
  id: Scalars['String']['input'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  profile?: InputMaybe<ProfileInput>;
};

export type UserTokenized = {
  __typename?: 'UserTokenized';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateProfileInput: CreateProfileInput;
  Mutation: ResolverTypeWrapper<{}>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileInput: ProfileInput;
  Query: ResolverTypeWrapper<{}>;
  SignInInput: SignInInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateProfileInput: UpdateProfileInput;
  User: ResolverTypeWrapper<User>;
  UserCreateProfileInput: UserCreateProfileInput;
  UserInput: UserInput;
  UserTokenized: ResolverTypeWrapper<UserTokenized>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  CreateProfileInput: CreateProfileInput;
  Mutation: {};
  Profile: Profile;
  ProfileInput: ProfileInput;
  Query: {};
  SignInInput: SignInInput;
  String: Scalars['String']['output'];
  UpdateProfileInput: UpdateProfileInput;
  User: User;
  UserCreateProfileInput: UserCreateProfileInput;
  UserInput: UserInput;
  UserTokenized: UserTokenized;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createProfile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, Partial<MutationCreateProfileArgs>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteProfile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<MutationDeleteProfileArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  signIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'input'>>;
  signUp?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  updateProfile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, Partial<MutationUpdateProfileArgs>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
}>;

export type ProfileResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  profileById?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<QueryProfileByIdArgs, 'id'>>;
  profiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Profile']>>>, ParentType, ContextType>;
  test?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userByEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>;
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'id'>>;
  userByToken?: Resolver<Maybe<ResolversTypes['UserTokenized']>, ParentType, ContextType, RequireFields<QueryUserByTokenArgs, 'token'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserTokenizedResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['UserTokenized'] = ResolversParentTypes['UserTokenized']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserTokenized?: UserTokenizedResolvers<ContextType>;
}>;

