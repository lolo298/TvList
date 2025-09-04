
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Stats
 * 
 */
export type Stats = $Result.DefaultSelection<Prisma.$StatsPayload>
/**
 * Model Preferences
 * 
 */
export type Preferences = $Result.DefaultSelection<Prisma.$PreferencesPayload>
/**
 * Model List
 * 
 */
export type List = $Result.DefaultSelection<Prisma.$ListPayload>
/**
 * Model Show
 * 
 */
export type Show = $Result.DefaultSelection<Prisma.$ShowPayload>
/**
 * Model TMDBImage
 * 
 */
export type TMDBImage = $Result.DefaultSelection<Prisma.$TMDBImagePayload>
/**
 * Model Season
 * 
 */
export type Season = $Result.DefaultSelection<Prisma.$SeasonPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DefaultPage: {
  SERIES: 'SERIES',
  MOVIES: 'MOVIES',
  SEARCH: 'SEARCH'
};

export type DefaultPage = (typeof DefaultPage)[keyof typeof DefaultPage]


export const Image_Type: {
  POSTER: 'POSTER',
  BACKDROP: 'BACKDROP',
  STILL: 'STILL',
  PROFILE: 'PROFILE',
  LOGO: 'LOGO'
};

export type Image_Type = (typeof Image_Type)[keyof typeof Image_Type]


export const Show_Type: {
  MOVIE: 'MOVIE',
  SERIES: 'SERIES'
};

export type Show_Type = (typeof Show_Type)[keyof typeof Show_Type]

}

export type DefaultPage = $Enums.DefaultPage

export const DefaultPage: typeof $Enums.DefaultPage

export type Image_Type = $Enums.Image_Type

export const Image_Type: typeof $Enums.Image_Type

export type Show_Type = $Enums.Show_Type

export const Show_Type: typeof $Enums.Show_Type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stats`: Exposes CRUD operations for the **Stats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stats.findMany()
    * ```
    */
  get stats(): Prisma.StatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preferences`: Exposes CRUD operations for the **Preferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preferences.findMany()
    * ```
    */
  get preferences(): Prisma.PreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.show`: Exposes CRUD operations for the **Show** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.show.findMany()
    * ```
    */
  get show(): Prisma.ShowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tMDBImage`: Exposes CRUD operations for the **TMDBImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TMDBImages
    * const tMDBImages = await prisma.tMDBImage.findMany()
    * ```
    */
  get tMDBImage(): Prisma.TMDBImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Stats: 'Stats',
    Preferences: 'Preferences',
    List: 'List',
    Show: 'Show',
    TMDBImage: 'TMDBImage',
    Season: 'Season',
    Episode: 'Episode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "stats" | "preferences" | "list" | "show" | "tMDBImage" | "season" | "episode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Stats: {
        payload: Prisma.$StatsPayload<ExtArgs>
        fields: Prisma.StatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          findFirst: {
            args: Prisma.StatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          findMany: {
            args: Prisma.StatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          create: {
            args: Prisma.StatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          createMany: {
            args: Prisma.StatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          delete: {
            args: Prisma.StatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          update: {
            args: Prisma.StatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          deleteMany: {
            args: Prisma.StatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          upsert: {
            args: Prisma.StatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          aggregate: {
            args: Prisma.StatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStats>
          }
          groupBy: {
            args: Prisma.StatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatsCountArgs<ExtArgs>
            result: $Utils.Optional<StatsCountAggregateOutputType> | number
          }
        }
      }
      Preferences: {
        payload: Prisma.$PreferencesPayload<ExtArgs>
        fields: Prisma.PreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findFirst: {
            args: Prisma.PreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findMany: {
            args: Prisma.PreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          create: {
            args: Prisma.PreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          createMany: {
            args: Prisma.PreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          delete: {
            args: Prisma.PreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          update: {
            args: Prisma.PreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          deleteMany: {
            args: Prisma.PreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          upsert: {
            args: Prisma.PreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          aggregate: {
            args: Prisma.PreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferences>
          }
          groupBy: {
            args: Prisma.PreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<PreferencesCountAggregateOutputType> | number
          }
        }
      }
      List: {
        payload: Prisma.$ListPayload<ExtArgs>
        fields: Prisma.ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findFirst: {
            args: Prisma.ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findMany: {
            args: Prisma.ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          create: {
            args: Prisma.ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          createMany: {
            args: Prisma.ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          delete: {
            args: Prisma.ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          update: {
            args: Prisma.ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          deleteMany: {
            args: Prisma.ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          upsert: {
            args: Prisma.ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          aggregate: {
            args: Prisma.ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateList>
          }
          groupBy: {
            args: Prisma.ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCountArgs<ExtArgs>
            result: $Utils.Optional<ListCountAggregateOutputType> | number
          }
        }
      }
      Show: {
        payload: Prisma.$ShowPayload<ExtArgs>
        fields: Prisma.ShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findFirst: {
            args: Prisma.ShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findMany: {
            args: Prisma.ShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          create: {
            args: Prisma.ShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          createMany: {
            args: Prisma.ShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          delete: {
            args: Prisma.ShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          update: {
            args: Prisma.ShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          deleteMany: {
            args: Prisma.ShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          upsert: {
            args: Prisma.ShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          aggregate: {
            args: Prisma.ShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShow>
          }
          groupBy: {
            args: Prisma.ShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowCountArgs<ExtArgs>
            result: $Utils.Optional<ShowCountAggregateOutputType> | number
          }
        }
      }
      TMDBImage: {
        payload: Prisma.$TMDBImagePayload<ExtArgs>
        fields: Prisma.TMDBImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TMDBImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TMDBImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>
          }
          findFirst: {
            args: Prisma.TMDBImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TMDBImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>
          }
          findMany: {
            args: Prisma.TMDBImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>[]
          }
          create: {
            args: Prisma.TMDBImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>
          }
          createMany: {
            args: Prisma.TMDBImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TMDBImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>[]
          }
          delete: {
            args: Prisma.TMDBImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>
          }
          update: {
            args: Prisma.TMDBImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>
          }
          deleteMany: {
            args: Prisma.TMDBImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TMDBImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TMDBImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>[]
          }
          upsert: {
            args: Prisma.TMDBImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TMDBImagePayload>
          }
          aggregate: {
            args: Prisma.TMDBImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTMDBImage>
          }
          groupBy: {
            args: Prisma.TMDBImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TMDBImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TMDBImageCountArgs<ExtArgs>
            result: $Utils.Optional<TMDBImageCountAggregateOutputType> | number
          }
        }
      }
      Season: {
        payload: Prisma.$SeasonPayload<ExtArgs>
        fields: Prisma.SeasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findFirst: {
            args: Prisma.SeasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findMany: {
            args: Prisma.SeasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          create: {
            args: Prisma.SeasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          createMany: {
            args: Prisma.SeasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          delete: {
            args: Prisma.SeasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          update: {
            args: Prisma.SeasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          deleteMany: {
            args: Prisma.SeasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          upsert: {
            args: Prisma.SeasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.SeasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    stats?: StatsOmit
    preferences?: PreferencesOmit
    list?: ListOmit
    show?: ShowOmit
    tMDBImage?: TMDBImageOmit
    season?: SeasonOmit
    episode?: EpisodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    list: number
    watchedEpisodes: number
    followedShows: number
    lovedShows: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | UserCountOutputTypeCountListArgs
    watchedEpisodes?: boolean | UserCountOutputTypeCountWatchedEpisodesArgs
    followedShows?: boolean | UserCountOutputTypeCountFollowedShowsArgs
    lovedShows?: boolean | UserCountOutputTypeCountLovedShowsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchedEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowedShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLovedShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
  }


  /**
   * Count Type ListCountOutputType
   */

  export type ListCountOutputType = {
    Shows: number
  }

  export type ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Shows?: boolean | ListCountOutputTypeCountShowsArgs
  }

  // Custom InputTypes
  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     */
    select?: ListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
  }


  /**
   * Count Type ShowCountOutputType
   */

  export type ShowCountOutputType = {
    seasons: number
    user: number
    lovedBy: number
    images: number
  }

  export type ShowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | ShowCountOutputTypeCountSeasonsArgs
    user?: boolean | ShowCountOutputTypeCountUserArgs
    lovedBy?: boolean | ShowCountOutputTypeCountLovedByArgs
    images?: boolean | ShowCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCountOutputType
     */
    select?: ShowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountLovedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TMDBImageWhereInput
  }


  /**
   * Count Type SeasonCountOutputType
   */

  export type SeasonCountOutputType = {
    episodes: number
    images: number
  }

  export type SeasonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | SeasonCountOutputTypeCountEpisodesArgs
    images?: boolean | SeasonCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     */
    select?: SeasonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TMDBImageWhereInput
  }


  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    User: number
    images: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | EpisodeCountOutputTypeCountUserArgs
    images?: boolean | EpisodeCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TMDBImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    profilePicture: string | null
    statsId: string | null
    preferencesId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    profilePicture: string | null
    statsId: string | null
    preferencesId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    profilePicture: number
    statsId: number
    preferencesId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    profilePicture?: true
    statsId?: true
    preferencesId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    profilePicture?: true
    statsId?: true
    preferencesId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    profilePicture?: true
    statsId?: true
    preferencesId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    profilePicture: string
    statsId: string
    preferencesId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    profilePicture?: boolean
    statsId?: boolean
    preferencesId?: boolean
    list?: boolean | User$listArgs<ExtArgs>
    stats?: boolean | StatsDefaultArgs<ExtArgs>
    preferences?: boolean | PreferencesDefaultArgs<ExtArgs>
    watchedEpisodes?: boolean | User$watchedEpisodesArgs<ExtArgs>
    followedShows?: boolean | User$followedShowsArgs<ExtArgs>
    lovedShows?: boolean | User$lovedShowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    profilePicture?: boolean
    statsId?: boolean
    preferencesId?: boolean
    stats?: boolean | StatsDefaultArgs<ExtArgs>
    preferences?: boolean | PreferencesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    profilePicture?: boolean
    statsId?: boolean
    preferencesId?: boolean
    stats?: boolean | StatsDefaultArgs<ExtArgs>
    preferences?: boolean | PreferencesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    profilePicture?: boolean
    statsId?: boolean
    preferencesId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "profilePicture" | "statsId" | "preferencesId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | User$listArgs<ExtArgs>
    stats?: boolean | StatsDefaultArgs<ExtArgs>
    preferences?: boolean | PreferencesDefaultArgs<ExtArgs>
    watchedEpisodes?: boolean | User$watchedEpisodesArgs<ExtArgs>
    followedShows?: boolean | User$followedShowsArgs<ExtArgs>
    lovedShows?: boolean | User$lovedShowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | StatsDefaultArgs<ExtArgs>
    preferences?: boolean | PreferencesDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | StatsDefaultArgs<ExtArgs>
    preferences?: boolean | PreferencesDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>[]
      stats: Prisma.$StatsPayload<ExtArgs>
      preferences: Prisma.$PreferencesPayload<ExtArgs>
      watchedEpisodes: Prisma.$EpisodePayload<ExtArgs>[]
      followedShows: Prisma.$ShowPayload<ExtArgs>[]
      lovedShows: Prisma.$ShowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      profilePicture: string
      statsId: string
      preferencesId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends User$listArgs<ExtArgs> = {}>(args?: Subset<T, User$listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stats<T extends StatsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatsDefaultArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preferences<T extends PreferencesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PreferencesDefaultArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    watchedEpisodes<T extends User$watchedEpisodesArgs<ExtArgs> = {}>(args?: Subset<T, User$watchedEpisodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followedShows<T extends User$followedShowsArgs<ExtArgs> = {}>(args?: Subset<T, User$followedShowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lovedShows<T extends User$lovedShowsArgs<ExtArgs> = {}>(args?: Subset<T, User$lovedShowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly statsId: FieldRef<"User", 'String'>
    readonly preferencesId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.list
   */
  export type User$listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    cursor?: ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * User.watchedEpisodes
   */
  export type User$watchedEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * User.followedShows
   */
  export type User$followedShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    cursor?: ShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * User.lovedShows
   */
  export type User$lovedShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    cursor?: ShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Stats
   */

  export type AggregateStats = {
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  export type StatsAvgAggregateOutputType = {
    loved: number | null
    followed: number | null
    seriesWatchTime: number | null
    seriesWatched: number | null
    moviesWatchTime: number | null
    moviesWatched: number | null
  }

  export type StatsSumAggregateOutputType = {
    loved: number | null
    followed: number | null
    seriesWatchTime: number | null
    seriesWatched: number | null
    moviesWatchTime: number | null
    moviesWatched: number | null
  }

  export type StatsMinAggregateOutputType = {
    id: string | null
    loved: number | null
    followed: number | null
    seriesWatchTime: number | null
    seriesWatched: number | null
    moviesWatchTime: number | null
    moviesWatched: number | null
  }

  export type StatsMaxAggregateOutputType = {
    id: string | null
    loved: number | null
    followed: number | null
    seriesWatchTime: number | null
    seriesWatched: number | null
    moviesWatchTime: number | null
    moviesWatched: number | null
  }

  export type StatsCountAggregateOutputType = {
    id: number
    loved: number
    followed: number
    seriesWatchTime: number
    seriesWatched: number
    moviesWatchTime: number
    moviesWatched: number
    _all: number
  }


  export type StatsAvgAggregateInputType = {
    loved?: true
    followed?: true
    seriesWatchTime?: true
    seriesWatched?: true
    moviesWatchTime?: true
    moviesWatched?: true
  }

  export type StatsSumAggregateInputType = {
    loved?: true
    followed?: true
    seriesWatchTime?: true
    seriesWatched?: true
    moviesWatchTime?: true
    moviesWatched?: true
  }

  export type StatsMinAggregateInputType = {
    id?: true
    loved?: true
    followed?: true
    seriesWatchTime?: true
    seriesWatched?: true
    moviesWatchTime?: true
    moviesWatched?: true
  }

  export type StatsMaxAggregateInputType = {
    id?: true
    loved?: true
    followed?: true
    seriesWatchTime?: true
    seriesWatched?: true
    moviesWatchTime?: true
    moviesWatched?: true
  }

  export type StatsCountAggregateInputType = {
    id?: true
    loved?: true
    followed?: true
    seriesWatchTime?: true
    seriesWatched?: true
    moviesWatchTime?: true
    moviesWatched?: true
    _all?: true
  }

  export type StatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to aggregate.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stats
    **/
    _count?: true | StatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatsMaxAggregateInputType
  }

  export type GetStatsAggregateType<T extends StatsAggregateArgs> = {
        [P in keyof T & keyof AggregateStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStats[P]>
      : GetScalarType<T[P], AggregateStats[P]>
  }




  export type StatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatsWhereInput
    orderBy?: StatsOrderByWithAggregationInput | StatsOrderByWithAggregationInput[]
    by: StatsScalarFieldEnum[] | StatsScalarFieldEnum
    having?: StatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatsCountAggregateInputType | true
    _avg?: StatsAvgAggregateInputType
    _sum?: StatsSumAggregateInputType
    _min?: StatsMinAggregateInputType
    _max?: StatsMaxAggregateInputType
  }

  export type StatsGroupByOutputType = {
    id: string
    loved: number
    followed: number
    seriesWatchTime: number
    seriesWatched: number
    moviesWatchTime: number
    moviesWatched: number
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  type GetStatsGroupByPayload<T extends StatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatsGroupByOutputType[P]>
            : GetScalarType<T[P], StatsGroupByOutputType[P]>
        }
      >
    >


  export type StatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loved?: boolean
    followed?: boolean
    seriesWatchTime?: boolean
    seriesWatched?: boolean
    moviesWatchTime?: boolean
    moviesWatched?: boolean
    user?: boolean | Stats$userArgs<ExtArgs>
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loved?: boolean
    followed?: boolean
    seriesWatchTime?: boolean
    seriesWatched?: boolean
    moviesWatchTime?: boolean
    moviesWatched?: boolean
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loved?: boolean
    followed?: boolean
    seriesWatchTime?: boolean
    seriesWatched?: boolean
    moviesWatchTime?: boolean
    moviesWatched?: boolean
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectScalar = {
    id?: boolean
    loved?: boolean
    followed?: boolean
    seriesWatchTime?: boolean
    seriesWatched?: boolean
    moviesWatchTime?: boolean
    moviesWatched?: boolean
  }

  export type StatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loved" | "followed" | "seriesWatchTime" | "seriesWatched" | "moviesWatchTime" | "moviesWatched", ExtArgs["result"]["stats"]>
  export type StatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Stats$userArgs<ExtArgs>
  }
  export type StatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      loved: number
      followed: number
      seriesWatchTime: number
      seriesWatched: number
      moviesWatchTime: number
      moviesWatched: number
    }, ExtArgs["result"]["stats"]>
    composites: {}
  }

  type StatsGetPayload<S extends boolean | null | undefined | StatsDefaultArgs> = $Result.GetResult<Prisma.$StatsPayload, S>

  type StatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatsCountAggregateInputType | true
    }

  export interface StatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stats'], meta: { name: 'Stats' } }
    /**
     * Find zero or one Stats that matches the filter.
     * @param {StatsFindUniqueArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatsFindUniqueArgs>(args: SelectSubset<T, StatsFindUniqueArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatsFindUniqueOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatsFindUniqueOrThrowArgs>(args: SelectSubset<T, StatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatsFindFirstArgs>(args?: SelectSubset<T, StatsFindFirstArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatsFindFirstOrThrowArgs>(args?: SelectSubset<T, StatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stats.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statsWithIdOnly = await prisma.stats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatsFindManyArgs>(args?: SelectSubset<T, StatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stats.
     * @param {StatsCreateArgs} args - Arguments to create a Stats.
     * @example
     * // Create one Stats
     * const Stats = await prisma.stats.create({
     *   data: {
     *     // ... data to create a Stats
     *   }
     * })
     * 
     */
    create<T extends StatsCreateArgs>(args: SelectSubset<T, StatsCreateArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stats.
     * @param {StatsCreateManyArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatsCreateManyArgs>(args?: SelectSubset<T, StatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stats and returns the data saved in the database.
     * @param {StatsCreateManyAndReturnArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stats and only return the `id`
     * const statsWithIdOnly = await prisma.stats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatsCreateManyAndReturnArgs>(args?: SelectSubset<T, StatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stats.
     * @param {StatsDeleteArgs} args - Arguments to delete one Stats.
     * @example
     * // Delete one Stats
     * const Stats = await prisma.stats.delete({
     *   where: {
     *     // ... filter to delete one Stats
     *   }
     * })
     * 
     */
    delete<T extends StatsDeleteArgs>(args: SelectSubset<T, StatsDeleteArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stats.
     * @param {StatsUpdateArgs} args - Arguments to update one Stats.
     * @example
     * // Update one Stats
     * const stats = await prisma.stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatsUpdateArgs>(args: SelectSubset<T, StatsUpdateArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stats.
     * @param {StatsDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatsDeleteManyArgs>(args?: SelectSubset<T, StatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatsUpdateManyArgs>(args: SelectSubset<T, StatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats and returns the data updated in the database.
     * @param {StatsUpdateManyAndReturnArgs} args - Arguments to update many Stats.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stats and only return the `id`
     * const statsWithIdOnly = await prisma.stats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatsUpdateManyAndReturnArgs>(args: SelectSubset<T, StatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stats.
     * @param {StatsUpsertArgs} args - Arguments to update or create a Stats.
     * @example
     * // Update or create a Stats
     * const stats = await prisma.stats.upsert({
     *   create: {
     *     // ... data to create a Stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stats we want to update
     *   }
     * })
     */
    upsert<T extends StatsUpsertArgs>(args: SelectSubset<T, StatsUpsertArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stats.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends StatsCountArgs>(
      args?: Subset<T, StatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatsAggregateArgs>(args: Subset<T, StatsAggregateArgs>): Prisma.PrismaPromise<GetStatsAggregateType<T>>

    /**
     * Group by Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatsGroupByArgs['orderBy'] }
        : { orderBy?: StatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stats model
   */
  readonly fields: StatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Stats$userArgs<ExtArgs> = {}>(args?: Subset<T, Stats$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stats model
   */
  interface StatsFieldRefs {
    readonly id: FieldRef<"Stats", 'String'>
    readonly loved: FieldRef<"Stats", 'Int'>
    readonly followed: FieldRef<"Stats", 'Int'>
    readonly seriesWatchTime: FieldRef<"Stats", 'Int'>
    readonly seriesWatched: FieldRef<"Stats", 'Int'>
    readonly moviesWatchTime: FieldRef<"Stats", 'Int'>
    readonly moviesWatched: FieldRef<"Stats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Stats findUnique
   */
  export type StatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats findUniqueOrThrow
   */
  export type StatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats findFirst
   */
  export type StatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats findFirstOrThrow
   */
  export type StatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats findMany
   */
  export type StatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats create
   */
  export type StatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The data needed to create a Stats.
     */
    data: XOR<StatsCreateInput, StatsUncheckedCreateInput>
  }

  /**
   * Stats createMany
   */
  export type StatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stats createManyAndReturn
   */
  export type StatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stats update
   */
  export type StatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The data needed to update a Stats.
     */
    data: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
    /**
     * Choose, which Stats to update.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats updateMany
   */
  export type StatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
  }

  /**
   * Stats updateManyAndReturn
   */
  export type StatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
  }

  /**
   * Stats upsert
   */
  export type StatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The filter to search for the Stats to update in case it exists.
     */
    where: StatsWhereUniqueInput
    /**
     * In case the Stats found by the `where` argument doesn't exist, create a new Stats with this data.
     */
    create: XOR<StatsCreateInput, StatsUncheckedCreateInput>
    /**
     * In case the Stats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
  }

  /**
   * Stats delete
   */
  export type StatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter which Stats to delete.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats deleteMany
   */
  export type StatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to delete
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to delete.
     */
    limit?: number
  }

  /**
   * Stats.user
   */
  export type Stats$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Stats without action
   */
  export type StatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
  }


  /**
   * Model Preferences
   */

  export type AggregatePreferences = {
    _count: PreferencesCountAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  export type PreferencesMinAggregateOutputType = {
    id: string | null
    gridView: boolean | null
    toWatch: boolean | null
    defaultPage: $Enums.DefaultPage | null
  }

  export type PreferencesMaxAggregateOutputType = {
    id: string | null
    gridView: boolean | null
    toWatch: boolean | null
    defaultPage: $Enums.DefaultPage | null
  }

  export type PreferencesCountAggregateOutputType = {
    id: number
    gridView: number
    toWatch: number
    defaultPage: number
    _all: number
  }


  export type PreferencesMinAggregateInputType = {
    id?: true
    gridView?: true
    toWatch?: true
    defaultPage?: true
  }

  export type PreferencesMaxAggregateInputType = {
    id?: true
    gridView?: true
    toWatch?: true
    defaultPage?: true
  }

  export type PreferencesCountAggregateInputType = {
    id?: true
    gridView?: true
    toWatch?: true
    defaultPage?: true
    _all?: true
  }

  export type PreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to aggregate.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preferences
    **/
    _count?: true | PreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferencesMaxAggregateInputType
  }

  export type GetPreferencesAggregateType<T extends PreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferences[P]>
      : GetScalarType<T[P], AggregatePreferences[P]>
  }




  export type PreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferencesWhereInput
    orderBy?: PreferencesOrderByWithAggregationInput | PreferencesOrderByWithAggregationInput[]
    by: PreferencesScalarFieldEnum[] | PreferencesScalarFieldEnum
    having?: PreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferencesCountAggregateInputType | true
    _min?: PreferencesMinAggregateInputType
    _max?: PreferencesMaxAggregateInputType
  }

  export type PreferencesGroupByOutputType = {
    id: string
    gridView: boolean
    toWatch: boolean
    defaultPage: $Enums.DefaultPage
    _count: PreferencesCountAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  type GetPreferencesGroupByPayload<T extends PreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
        }
      >
    >


  export type PreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: boolean
    user?: boolean | Preferences$userArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: boolean
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: boolean
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectScalar = {
    id?: boolean
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: boolean
  }

  export type PreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gridView" | "toWatch" | "defaultPage", ExtArgs["result"]["preferences"]>
  export type PreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Preferences$userArgs<ExtArgs>
  }
  export type PreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gridView: boolean
      toWatch: boolean
      defaultPage: $Enums.DefaultPage
    }, ExtArgs["result"]["preferences"]>
    composites: {}
  }

  type PreferencesGetPayload<S extends boolean | null | undefined | PreferencesDefaultArgs> = $Result.GetResult<Prisma.$PreferencesPayload, S>

  type PreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferencesCountAggregateInputType | true
    }

  export interface PreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preferences'], meta: { name: 'Preferences' } }
    /**
     * Find zero or one Preferences that matches the filter.
     * @param {PreferencesFindUniqueArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferencesFindUniqueArgs>(args: SelectSubset<T, PreferencesFindUniqueArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferencesFindUniqueOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferencesFindFirstArgs>(args?: SelectSubset<T, PreferencesFindFirstArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preferences.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferencesWithIdOnly = await prisma.preferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferencesFindManyArgs>(args?: SelectSubset<T, PreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preferences.
     * @param {PreferencesCreateArgs} args - Arguments to create a Preferences.
     * @example
     * // Create one Preferences
     * const Preferences = await prisma.preferences.create({
     *   data: {
     *     // ... data to create a Preferences
     *   }
     * })
     * 
     */
    create<T extends PreferencesCreateArgs>(args: SelectSubset<T, PreferencesCreateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {PreferencesCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferencesCreateManyArgs>(args?: SelectSubset<T, PreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {PreferencesCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `id`
     * const preferencesWithIdOnly = await prisma.preferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preferences.
     * @param {PreferencesDeleteArgs} args - Arguments to delete one Preferences.
     * @example
     * // Delete one Preferences
     * const Preferences = await prisma.preferences.delete({
     *   where: {
     *     // ... filter to delete one Preferences
     *   }
     * })
     * 
     */
    delete<T extends PreferencesDeleteArgs>(args: SelectSubset<T, PreferencesDeleteArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preferences.
     * @param {PreferencesUpdateArgs} args - Arguments to update one Preferences.
     * @example
     * // Update one Preferences
     * const preferences = await prisma.preferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferencesUpdateArgs>(args: SelectSubset<T, PreferencesUpdateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {PreferencesDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferencesDeleteManyArgs>(args?: SelectSubset<T, PreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferencesUpdateManyArgs>(args: SelectSubset<T, PreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {PreferencesUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `id`
     * const preferencesWithIdOnly = await prisma.preferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preferences.
     * @param {PreferencesUpsertArgs} args - Arguments to update or create a Preferences.
     * @example
     * // Update or create a Preferences
     * const preferences = await prisma.preferences.upsert({
     *   create: {
     *     // ... data to create a Preferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preferences we want to update
     *   }
     * })
     */
    upsert<T extends PreferencesUpsertArgs>(args: SelectSubset<T, PreferencesUpsertArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preferences.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends PreferencesCountArgs>(
      args?: Subset<T, PreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferencesAggregateArgs>(args: Subset<T, PreferencesAggregateArgs>): Prisma.PrismaPromise<GetPreferencesAggregateType<T>>

    /**
     * Group by Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferencesGroupByArgs['orderBy'] }
        : { orderBy?: PreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preferences model
   */
  readonly fields: PreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Preferences$userArgs<ExtArgs> = {}>(args?: Subset<T, Preferences$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Preferences model
   */
  interface PreferencesFieldRefs {
    readonly id: FieldRef<"Preferences", 'String'>
    readonly gridView: FieldRef<"Preferences", 'Boolean'>
    readonly toWatch: FieldRef<"Preferences", 'Boolean'>
    readonly defaultPage: FieldRef<"Preferences", 'DefaultPage'>
  }
    

  // Custom InputTypes
  /**
   * Preferences findUnique
   */
  export type PreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findUniqueOrThrow
   */
  export type PreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findFirst
   */
  export type PreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findFirstOrThrow
   */
  export type PreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findMany
   */
  export type PreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences create
   */
  export type PreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a Preferences.
     */
    data?: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
  }

  /**
   * Preferences createMany
   */
  export type PreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preferences createManyAndReturn
   */
  export type PreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preferences update
   */
  export type PreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a Preferences.
     */
    data: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
    /**
     * Choose, which Preferences to update.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences updateMany
   */
  export type PreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preferences updateManyAndReturn
   */
  export type PreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preferences upsert
   */
  export type PreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the Preferences to update in case it exists.
     */
    where: PreferencesWhereUniqueInput
    /**
     * In case the Preferences found by the `where` argument doesn't exist, create a new Preferences with this data.
     */
    create: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
    /**
     * In case the Preferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
  }

  /**
   * Preferences delete
   */
  export type PreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter which Preferences to delete.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences deleteMany
   */
  export type PreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to delete
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to delete.
     */
    limit?: number
  }

  /**
   * Preferences.user
   */
  export type Preferences$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Preferences without action
   */
  export type PreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
  }


  /**
   * Model List
   */

  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type ListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type ListMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List to aggregate.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
    orderBy?: ListOrderByWithAggregationInput | ListOrderByWithAggregationInput[]
    by: ListScalarFieldEnum[] | ListScalarFieldEnum
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }

  export type ListGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: ListCountAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Shows?: boolean | List$ShowsArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["list"]>
  export type ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Shows?: boolean | List$ShowsArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Shows: Prisma.$ShowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["list"]>
    composites: {}
  }

  type ListGetPayload<S extends boolean | null | undefined | ListDefaultArgs> = $Result.GetResult<Prisma.$ListPayload, S>

  type ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListCountAggregateInputType | true
    }

  export interface ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List'], meta: { name: 'List' } }
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListFindUniqueArgs>(args: SelectSubset<T, ListFindUniqueArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs>(args: SelectSubset<T, ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListFindFirstArgs>(args?: SelectSubset<T, ListFindFirstArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs>(args?: SelectSubset<T, ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListFindManyArgs>(args?: SelectSubset<T, ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
     */
    create<T extends ListCreateArgs>(args: SelectSubset<T, ListCreateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {ListCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListCreateManyArgs>(args?: SelectSubset<T, ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {ListCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListCreateManyAndReturnArgs>(args?: SelectSubset<T, ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
     */
    delete<T extends ListDeleteArgs>(args: SelectSubset<T, ListDeleteArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListUpdateArgs>(args: SelectSubset<T, ListUpdateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListDeleteManyArgs>(args?: SelectSubset<T, ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListUpdateManyArgs>(args: SelectSubset<T, ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {ListUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListUpdateManyAndReturnArgs>(args: SelectSubset<T, ListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
     */
    upsert<T extends ListUpsertArgs>(args: SelectSubset<T, ListUpsertArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): Prisma.PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List model
   */
  readonly fields: ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Shows<T extends List$ShowsArgs<ExtArgs> = {}>(args?: Subset<T, List$ShowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the List model
   */
  interface ListFieldRefs {
    readonly id: FieldRef<"List", 'String'>
    readonly name: FieldRef<"List", 'String'>
    readonly userId: FieldRef<"List", 'String'>
  }
    

  // Custom InputTypes
  /**
   * List findUnique
   */
  export type ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findFirst
   */
  export type ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findMany
   */
  export type ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List create
   */
  export type ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to create a List.
     */
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }

  /**
   * List createMany
   */
  export type ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * List createManyAndReturn
   */
  export type ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * List update
   */
  export type ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to update a List.
     */
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List updateMany
   */
  export type ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * List updateManyAndReturn
   */
  export type ListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * List upsert
   */
  export type ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The filter to search for the List to update in case it exists.
     */
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     */
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }

  /**
   * List delete
   */
  export type ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter which List to delete.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to delete.
     */
    limit?: number
  }

  /**
   * List.Shows
   */
  export type List$ShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    cursor?: ShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * List without action
   */
  export type ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
  }


  /**
   * Model Show
   */

  export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  export type ShowAvgAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    popularity: number | null
  }

  export type ShowSumAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    popularity: number | null
  }

  export type ShowMinAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    type: $Enums.Show_Type | null
    adult: boolean | null
    popularity: number | null
    name: string | null
    listId: string | null
    updatedAt: Date | null
  }

  export type ShowMaxAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    type: $Enums.Show_Type | null
    adult: boolean | null
    popularity: number | null
    name: string | null
    listId: string | null
    updatedAt: Date | null
  }

  export type ShowCountAggregateOutputType = {
    id: number
    tmdbId: number
    type: number
    adult: number
    popularity: number
    name: number
    listId: number
    updatedAt: number
    _all: number
  }


  export type ShowAvgAggregateInputType = {
    id?: true
    tmdbId?: true
    popularity?: true
  }

  export type ShowSumAggregateInputType = {
    id?: true
    tmdbId?: true
    popularity?: true
  }

  export type ShowMinAggregateInputType = {
    id?: true
    tmdbId?: true
    type?: true
    adult?: true
    popularity?: true
    name?: true
    listId?: true
    updatedAt?: true
  }

  export type ShowMaxAggregateInputType = {
    id?: true
    tmdbId?: true
    type?: true
    adult?: true
    popularity?: true
    name?: true
    listId?: true
    updatedAt?: true
  }

  export type ShowCountAggregateInputType = {
    id?: true
    tmdbId?: true
    type?: true
    adult?: true
    popularity?: true
    name?: true
    listId?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Show to aggregate.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shows
    **/
    _count?: true | ShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowMaxAggregateInputType
  }

  export type GetShowAggregateType<T extends ShowAggregateArgs> = {
        [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow[P]>
      : GetScalarType<T[P], AggregateShow[P]>
  }




  export type ShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithAggregationInput | ShowOrderByWithAggregationInput[]
    by: ShowScalarFieldEnum[] | ShowScalarFieldEnum
    having?: ShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCountAggregateInputType | true
    _avg?: ShowAvgAggregateInputType
    _sum?: ShowSumAggregateInputType
    _min?: ShowMinAggregateInputType
    _max?: ShowMaxAggregateInputType
  }

  export type ShowGroupByOutputType = {
    id: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    listId: string | null
    updatedAt: Date
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  type GetShowGroupByPayload<T extends ShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowGroupByOutputType[P]>
            : GetScalarType<T[P], ShowGroupByOutputType[P]>
        }
      >
    >


  export type ShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    type?: boolean
    adult?: boolean
    popularity?: boolean
    name?: boolean
    listId?: boolean
    updatedAt?: boolean
    seasons?: boolean | Show$seasonsArgs<ExtArgs>
    list?: boolean | Show$listArgs<ExtArgs>
    user?: boolean | Show$userArgs<ExtArgs>
    lovedBy?: boolean | Show$lovedByArgs<ExtArgs>
    images?: boolean | Show$imagesArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["show"]>

  export type ShowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    type?: boolean
    adult?: boolean
    popularity?: boolean
    name?: boolean
    listId?: boolean
    updatedAt?: boolean
    list?: boolean | Show$listArgs<ExtArgs>
  }, ExtArgs["result"]["show"]>

  export type ShowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    type?: boolean
    adult?: boolean
    popularity?: boolean
    name?: boolean
    listId?: boolean
    updatedAt?: boolean
    list?: boolean | Show$listArgs<ExtArgs>
  }, ExtArgs["result"]["show"]>

  export type ShowSelectScalar = {
    id?: boolean
    tmdbId?: boolean
    type?: boolean
    adult?: boolean
    popularity?: boolean
    name?: boolean
    listId?: boolean
    updatedAt?: boolean
  }

  export type ShowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tmdbId" | "type" | "adult" | "popularity" | "name" | "listId" | "updatedAt", ExtArgs["result"]["show"]>
  export type ShowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | Show$seasonsArgs<ExtArgs>
    list?: boolean | Show$listArgs<ExtArgs>
    user?: boolean | Show$userArgs<ExtArgs>
    lovedBy?: boolean | Show$lovedByArgs<ExtArgs>
    images?: boolean | Show$imagesArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | Show$listArgs<ExtArgs>
  }
  export type ShowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | Show$listArgs<ExtArgs>
  }

  export type $ShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Show"
    objects: {
      seasons: Prisma.$SeasonPayload<ExtArgs>[]
      list: Prisma.$ListPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>[]
      lovedBy: Prisma.$UserPayload<ExtArgs>[]
      images: Prisma.$TMDBImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tmdbId: number
      type: $Enums.Show_Type
      adult: boolean
      popularity: number
      name: string
      listId: string | null
      updatedAt: Date
    }, ExtArgs["result"]["show"]>
    composites: {}
  }

  type ShowGetPayload<S extends boolean | null | undefined | ShowDefaultArgs> = $Result.GetResult<Prisma.$ShowPayload, S>

  type ShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowCountAggregateInputType | true
    }

  export interface ShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Show'], meta: { name: 'Show' } }
    /**
     * Find zero or one Show that matches the filter.
     * @param {ShowFindUniqueArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowFindUniqueArgs>(args: SelectSubset<T, ShowFindUniqueArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Show that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowFindUniqueOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowFindFirstArgs>(args?: SelectSubset<T, ShowFindFirstArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.show.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.show.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showWithIdOnly = await prisma.show.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowFindManyArgs>(args?: SelectSubset<T, ShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Show.
     * @param {ShowCreateArgs} args - Arguments to create a Show.
     * @example
     * // Create one Show
     * const Show = await prisma.show.create({
     *   data: {
     *     // ... data to create a Show
     *   }
     * })
     * 
     */
    create<T extends ShowCreateArgs>(args: SelectSubset<T, ShowCreateArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shows.
     * @param {ShowCreateManyArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowCreateManyArgs>(args?: SelectSubset<T, ShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shows and returns the data saved in the database.
     * @param {ShowCreateManyAndReturnArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shows and only return the `id`
     * const showWithIdOnly = await prisma.show.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Show.
     * @param {ShowDeleteArgs} args - Arguments to delete one Show.
     * @example
     * // Delete one Show
     * const Show = await prisma.show.delete({
     *   where: {
     *     // ... filter to delete one Show
     *   }
     * })
     * 
     */
    delete<T extends ShowDeleteArgs>(args: SelectSubset<T, ShowDeleteArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Show.
     * @param {ShowUpdateArgs} args - Arguments to update one Show.
     * @example
     * // Update one Show
     * const show = await prisma.show.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowUpdateArgs>(args: SelectSubset<T, ShowUpdateArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shows.
     * @param {ShowDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.show.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowDeleteManyArgs>(args?: SelectSubset<T, ShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowUpdateManyArgs>(args: SelectSubset<T, ShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows and returns the data updated in the database.
     * @param {ShowUpdateManyAndReturnArgs} args - Arguments to update many Shows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shows and only return the `id`
     * const showWithIdOnly = await prisma.show.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShowUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Show.
     * @param {ShowUpsertArgs} args - Arguments to update or create a Show.
     * @example
     * // Update or create a Show
     * const show = await prisma.show.upsert({
     *   create: {
     *     // ... data to create a Show
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show we want to update
     *   }
     * })
     */
    upsert<T extends ShowUpsertArgs>(args: SelectSubset<T, ShowUpsertArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.show.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends ShowCountArgs>(
      args?: Subset<T, ShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowAggregateArgs>(args: Subset<T, ShowAggregateArgs>): Prisma.PrismaPromise<GetShowAggregateType<T>>

    /**
     * Group by Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowGroupByArgs['orderBy'] }
        : { orderBy?: ShowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Show model
   */
  readonly fields: ShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Show.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seasons<T extends Show$seasonsArgs<ExtArgs> = {}>(args?: Subset<T, Show$seasonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    list<T extends Show$listArgs<ExtArgs> = {}>(args?: Subset<T, Show$listArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Show$userArgs<ExtArgs> = {}>(args?: Subset<T, Show$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lovedBy<T extends Show$lovedByArgs<ExtArgs> = {}>(args?: Subset<T, Show$lovedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Show$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Show$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Show model
   */
  interface ShowFieldRefs {
    readonly id: FieldRef<"Show", 'Int'>
    readonly tmdbId: FieldRef<"Show", 'Int'>
    readonly type: FieldRef<"Show", 'Show_Type'>
    readonly adult: FieldRef<"Show", 'Boolean'>
    readonly popularity: FieldRef<"Show", 'Float'>
    readonly name: FieldRef<"Show", 'String'>
    readonly listId: FieldRef<"Show", 'String'>
    readonly updatedAt: FieldRef<"Show", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Show findUnique
   */
  export type ShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show findUniqueOrThrow
   */
  export type ShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show findFirst
   */
  export type ShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show findFirstOrThrow
   */
  export type ShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show findMany
   */
  export type ShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show create
   */
  export type ShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to create a Show.
     */
    data: XOR<ShowCreateInput, ShowUncheckedCreateInput>
  }

  /**
   * Show createMany
   */
  export type ShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shows.
     */
    data: ShowCreateManyInput | ShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Show createManyAndReturn
   */
  export type ShowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * The data used to create many Shows.
     */
    data: ShowCreateManyInput | ShowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Show update
   */
  export type ShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to update a Show.
     */
    data: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
    /**
     * Choose, which Show to update.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show updateMany
   */
  export type ShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
  }

  /**
   * Show updateManyAndReturn
   */
  export type ShowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Show upsert
   */
  export type ShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The filter to search for the Show to update in case it exists.
     */
    where: ShowWhereUniqueInput
    /**
     * In case the Show found by the `where` argument doesn't exist, create a new Show with this data.
     */
    create: XOR<ShowCreateInput, ShowUncheckedCreateInput>
    /**
     * In case the Show was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
  }

  /**
   * Show delete
   */
  export type ShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter which Show to delete.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show deleteMany
   */
  export type ShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to delete
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to delete.
     */
    limit?: number
  }

  /**
   * Show.seasons
   */
  export type Show$seasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    cursor?: SeasonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Show.list
   */
  export type Show$listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
  }

  /**
   * Show.user
   */
  export type Show$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Show.lovedBy
   */
  export type Show$lovedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Show.images
   */
  export type Show$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    where?: TMDBImageWhereInput
    orderBy?: TMDBImageOrderByWithRelationInput | TMDBImageOrderByWithRelationInput[]
    cursor?: TMDBImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TMDBImageScalarFieldEnum | TMDBImageScalarFieldEnum[]
  }

  /**
   * Show without action
   */
  export type ShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
  }


  /**
   * Model TMDBImage
   */

  export type AggregateTMDBImage = {
    _count: TMDBImageCountAggregateOutputType | null
    _avg: TMDBImageAvgAggregateOutputType | null
    _sum: TMDBImageSumAggregateOutputType | null
    _min: TMDBImageMinAggregateOutputType | null
    _max: TMDBImageMaxAggregateOutputType | null
  }

  export type TMDBImageAvgAggregateOutputType = {
    id: number | null
    showId: number | null
    seasonId: number | null
    episodeId: number | null
  }

  export type TMDBImageSumAggregateOutputType = {
    id: number | null
    showId: number | null
    seasonId: number | null
    episodeId: number | null
  }

  export type TMDBImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    type: $Enums.Image_Type | null
    showId: number | null
    seasonId: number | null
    episodeId: number | null
  }

  export type TMDBImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    type: $Enums.Image_Type | null
    showId: number | null
    seasonId: number | null
    episodeId: number | null
  }

  export type TMDBImageCountAggregateOutputType = {
    id: number
    url: number
    type: number
    showId: number
    seasonId: number
    episodeId: number
    _all: number
  }


  export type TMDBImageAvgAggregateInputType = {
    id?: true
    showId?: true
    seasonId?: true
    episodeId?: true
  }

  export type TMDBImageSumAggregateInputType = {
    id?: true
    showId?: true
    seasonId?: true
    episodeId?: true
  }

  export type TMDBImageMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    showId?: true
    seasonId?: true
    episodeId?: true
  }

  export type TMDBImageMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    showId?: true
    seasonId?: true
    episodeId?: true
  }

  export type TMDBImageCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    showId?: true
    seasonId?: true
    episodeId?: true
    _all?: true
  }

  export type TMDBImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TMDBImage to aggregate.
     */
    where?: TMDBImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TMDBImages to fetch.
     */
    orderBy?: TMDBImageOrderByWithRelationInput | TMDBImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TMDBImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TMDBImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TMDBImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TMDBImages
    **/
    _count?: true | TMDBImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TMDBImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TMDBImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TMDBImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TMDBImageMaxAggregateInputType
  }

  export type GetTMDBImageAggregateType<T extends TMDBImageAggregateArgs> = {
        [P in keyof T & keyof AggregateTMDBImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTMDBImage[P]>
      : GetScalarType<T[P], AggregateTMDBImage[P]>
  }




  export type TMDBImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TMDBImageWhereInput
    orderBy?: TMDBImageOrderByWithAggregationInput | TMDBImageOrderByWithAggregationInput[]
    by: TMDBImageScalarFieldEnum[] | TMDBImageScalarFieldEnum
    having?: TMDBImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TMDBImageCountAggregateInputType | true
    _avg?: TMDBImageAvgAggregateInputType
    _sum?: TMDBImageSumAggregateInputType
    _min?: TMDBImageMinAggregateInputType
    _max?: TMDBImageMaxAggregateInputType
  }

  export type TMDBImageGroupByOutputType = {
    id: number
    url: string
    type: $Enums.Image_Type
    showId: number | null
    seasonId: number | null
    episodeId: number | null
    _count: TMDBImageCountAggregateOutputType | null
    _avg: TMDBImageAvgAggregateOutputType | null
    _sum: TMDBImageSumAggregateOutputType | null
    _min: TMDBImageMinAggregateOutputType | null
    _max: TMDBImageMaxAggregateOutputType | null
  }

  type GetTMDBImageGroupByPayload<T extends TMDBImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TMDBImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TMDBImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TMDBImageGroupByOutputType[P]>
            : GetScalarType<T[P], TMDBImageGroupByOutputType[P]>
        }
      >
    >


  export type TMDBImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    showId?: boolean
    seasonId?: boolean
    episodeId?: boolean
    show?: boolean | TMDBImage$showArgs<ExtArgs>
    season?: boolean | TMDBImage$seasonArgs<ExtArgs>
    episode?: boolean | TMDBImage$episodeArgs<ExtArgs>
  }, ExtArgs["result"]["tMDBImage"]>

  export type TMDBImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    showId?: boolean
    seasonId?: boolean
    episodeId?: boolean
    show?: boolean | TMDBImage$showArgs<ExtArgs>
    season?: boolean | TMDBImage$seasonArgs<ExtArgs>
    episode?: boolean | TMDBImage$episodeArgs<ExtArgs>
  }, ExtArgs["result"]["tMDBImage"]>

  export type TMDBImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    showId?: boolean
    seasonId?: boolean
    episodeId?: boolean
    show?: boolean | TMDBImage$showArgs<ExtArgs>
    season?: boolean | TMDBImage$seasonArgs<ExtArgs>
    episode?: boolean | TMDBImage$episodeArgs<ExtArgs>
  }, ExtArgs["result"]["tMDBImage"]>

  export type TMDBImageSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    showId?: boolean
    seasonId?: boolean
    episodeId?: boolean
  }

  export type TMDBImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "showId" | "seasonId" | "episodeId", ExtArgs["result"]["tMDBImage"]>
  export type TMDBImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | TMDBImage$showArgs<ExtArgs>
    season?: boolean | TMDBImage$seasonArgs<ExtArgs>
    episode?: boolean | TMDBImage$episodeArgs<ExtArgs>
  }
  export type TMDBImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | TMDBImage$showArgs<ExtArgs>
    season?: boolean | TMDBImage$seasonArgs<ExtArgs>
    episode?: boolean | TMDBImage$episodeArgs<ExtArgs>
  }
  export type TMDBImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | TMDBImage$showArgs<ExtArgs>
    season?: boolean | TMDBImage$seasonArgs<ExtArgs>
    episode?: boolean | TMDBImage$episodeArgs<ExtArgs>
  }

  export type $TMDBImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TMDBImage"
    objects: {
      show: Prisma.$ShowPayload<ExtArgs> | null
      season: Prisma.$SeasonPayload<ExtArgs> | null
      episode: Prisma.$EpisodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      type: $Enums.Image_Type
      showId: number | null
      seasonId: number | null
      episodeId: number | null
    }, ExtArgs["result"]["tMDBImage"]>
    composites: {}
  }

  type TMDBImageGetPayload<S extends boolean | null | undefined | TMDBImageDefaultArgs> = $Result.GetResult<Prisma.$TMDBImagePayload, S>

  type TMDBImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TMDBImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TMDBImageCountAggregateInputType | true
    }

  export interface TMDBImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TMDBImage'], meta: { name: 'TMDBImage' } }
    /**
     * Find zero or one TMDBImage that matches the filter.
     * @param {TMDBImageFindUniqueArgs} args - Arguments to find a TMDBImage
     * @example
     * // Get one TMDBImage
     * const tMDBImage = await prisma.tMDBImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TMDBImageFindUniqueArgs>(args: SelectSubset<T, TMDBImageFindUniqueArgs<ExtArgs>>): Prisma__TMDBImageClient<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TMDBImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TMDBImageFindUniqueOrThrowArgs} args - Arguments to find a TMDBImage
     * @example
     * // Get one TMDBImage
     * const tMDBImage = await prisma.tMDBImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TMDBImageFindUniqueOrThrowArgs>(args: SelectSubset<T, TMDBImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TMDBImageClient<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TMDBImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TMDBImageFindFirstArgs} args - Arguments to find a TMDBImage
     * @example
     * // Get one TMDBImage
     * const tMDBImage = await prisma.tMDBImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TMDBImageFindFirstArgs>(args?: SelectSubset<T, TMDBImageFindFirstArgs<ExtArgs>>): Prisma__TMDBImageClient<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TMDBImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TMDBImageFindFirstOrThrowArgs} args - Arguments to find a TMDBImage
     * @example
     * // Get one TMDBImage
     * const tMDBImage = await prisma.tMDBImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TMDBImageFindFirstOrThrowArgs>(args?: SelectSubset<T, TMDBImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TMDBImageClient<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TMDBImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TMDBImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TMDBImages
     * const tMDBImages = await prisma.tMDBImage.findMany()
     * 
     * // Get first 10 TMDBImages
     * const tMDBImages = await prisma.tMDBImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tMDBImageWithIdOnly = await prisma.tMDBImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TMDBImageFindManyArgs>(args?: SelectSubset<T, TMDBImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TMDBImage.
     * @param {TMDBImageCreateArgs} args - Arguments to create a TMDBImage.
     * @example
     * // Create one TMDBImage
     * const TMDBImage = await prisma.tMDBImage.create({
     *   data: {
     *     // ... data to create a TMDBImage
     *   }
     * })
     * 
     */
    create<T extends TMDBImageCreateArgs>(args: SelectSubset<T, TMDBImageCreateArgs<ExtArgs>>): Prisma__TMDBImageClient<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TMDBImages.
     * @param {TMDBImageCreateManyArgs} args - Arguments to create many TMDBImages.
     * @example
     * // Create many TMDBImages
     * const tMDBImage = await prisma.tMDBImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TMDBImageCreateManyArgs>(args?: SelectSubset<T, TMDBImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TMDBImages and returns the data saved in the database.
     * @param {TMDBImageCreateManyAndReturnArgs} args - Arguments to create many TMDBImages.
     * @example
     * // Create many TMDBImages
     * const tMDBImage = await prisma.tMDBImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TMDBImages and only return the `id`
     * const tMDBImageWithIdOnly = await prisma.tMDBImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TMDBImageCreateManyAndReturnArgs>(args?: SelectSubset<T, TMDBImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TMDBImage.
     * @param {TMDBImageDeleteArgs} args - Arguments to delete one TMDBImage.
     * @example
     * // Delete one TMDBImage
     * const TMDBImage = await prisma.tMDBImage.delete({
     *   where: {
     *     // ... filter to delete one TMDBImage
     *   }
     * })
     * 
     */
    delete<T extends TMDBImageDeleteArgs>(args: SelectSubset<T, TMDBImageDeleteArgs<ExtArgs>>): Prisma__TMDBImageClient<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TMDBImage.
     * @param {TMDBImageUpdateArgs} args - Arguments to update one TMDBImage.
     * @example
     * // Update one TMDBImage
     * const tMDBImage = await prisma.tMDBImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TMDBImageUpdateArgs>(args: SelectSubset<T, TMDBImageUpdateArgs<ExtArgs>>): Prisma__TMDBImageClient<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TMDBImages.
     * @param {TMDBImageDeleteManyArgs} args - Arguments to filter TMDBImages to delete.
     * @example
     * // Delete a few TMDBImages
     * const { count } = await prisma.tMDBImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TMDBImageDeleteManyArgs>(args?: SelectSubset<T, TMDBImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TMDBImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TMDBImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TMDBImages
     * const tMDBImage = await prisma.tMDBImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TMDBImageUpdateManyArgs>(args: SelectSubset<T, TMDBImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TMDBImages and returns the data updated in the database.
     * @param {TMDBImageUpdateManyAndReturnArgs} args - Arguments to update many TMDBImages.
     * @example
     * // Update many TMDBImages
     * const tMDBImage = await prisma.tMDBImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TMDBImages and only return the `id`
     * const tMDBImageWithIdOnly = await prisma.tMDBImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TMDBImageUpdateManyAndReturnArgs>(args: SelectSubset<T, TMDBImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TMDBImage.
     * @param {TMDBImageUpsertArgs} args - Arguments to update or create a TMDBImage.
     * @example
     * // Update or create a TMDBImage
     * const tMDBImage = await prisma.tMDBImage.upsert({
     *   create: {
     *     // ... data to create a TMDBImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TMDBImage we want to update
     *   }
     * })
     */
    upsert<T extends TMDBImageUpsertArgs>(args: SelectSubset<T, TMDBImageUpsertArgs<ExtArgs>>): Prisma__TMDBImageClient<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TMDBImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TMDBImageCountArgs} args - Arguments to filter TMDBImages to count.
     * @example
     * // Count the number of TMDBImages
     * const count = await prisma.tMDBImage.count({
     *   where: {
     *     // ... the filter for the TMDBImages we want to count
     *   }
     * })
    **/
    count<T extends TMDBImageCountArgs>(
      args?: Subset<T, TMDBImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TMDBImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TMDBImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TMDBImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TMDBImageAggregateArgs>(args: Subset<T, TMDBImageAggregateArgs>): Prisma.PrismaPromise<GetTMDBImageAggregateType<T>>

    /**
     * Group by TMDBImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TMDBImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TMDBImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TMDBImageGroupByArgs['orderBy'] }
        : { orderBy?: TMDBImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TMDBImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTMDBImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TMDBImage model
   */
  readonly fields: TMDBImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TMDBImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TMDBImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    show<T extends TMDBImage$showArgs<ExtArgs> = {}>(args?: Subset<T, TMDBImage$showArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    season<T extends TMDBImage$seasonArgs<ExtArgs> = {}>(args?: Subset<T, TMDBImage$seasonArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    episode<T extends TMDBImage$episodeArgs<ExtArgs> = {}>(args?: Subset<T, TMDBImage$episodeArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TMDBImage model
   */
  interface TMDBImageFieldRefs {
    readonly id: FieldRef<"TMDBImage", 'Int'>
    readonly url: FieldRef<"TMDBImage", 'String'>
    readonly type: FieldRef<"TMDBImage", 'Image_Type'>
    readonly showId: FieldRef<"TMDBImage", 'Int'>
    readonly seasonId: FieldRef<"TMDBImage", 'Int'>
    readonly episodeId: FieldRef<"TMDBImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TMDBImage findUnique
   */
  export type TMDBImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * Filter, which TMDBImage to fetch.
     */
    where: TMDBImageWhereUniqueInput
  }

  /**
   * TMDBImage findUniqueOrThrow
   */
  export type TMDBImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * Filter, which TMDBImage to fetch.
     */
    where: TMDBImageWhereUniqueInput
  }

  /**
   * TMDBImage findFirst
   */
  export type TMDBImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * Filter, which TMDBImage to fetch.
     */
    where?: TMDBImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TMDBImages to fetch.
     */
    orderBy?: TMDBImageOrderByWithRelationInput | TMDBImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TMDBImages.
     */
    cursor?: TMDBImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TMDBImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TMDBImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TMDBImages.
     */
    distinct?: TMDBImageScalarFieldEnum | TMDBImageScalarFieldEnum[]
  }

  /**
   * TMDBImage findFirstOrThrow
   */
  export type TMDBImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * Filter, which TMDBImage to fetch.
     */
    where?: TMDBImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TMDBImages to fetch.
     */
    orderBy?: TMDBImageOrderByWithRelationInput | TMDBImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TMDBImages.
     */
    cursor?: TMDBImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TMDBImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TMDBImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TMDBImages.
     */
    distinct?: TMDBImageScalarFieldEnum | TMDBImageScalarFieldEnum[]
  }

  /**
   * TMDBImage findMany
   */
  export type TMDBImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * Filter, which TMDBImages to fetch.
     */
    where?: TMDBImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TMDBImages to fetch.
     */
    orderBy?: TMDBImageOrderByWithRelationInput | TMDBImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TMDBImages.
     */
    cursor?: TMDBImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TMDBImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TMDBImages.
     */
    skip?: number
    distinct?: TMDBImageScalarFieldEnum | TMDBImageScalarFieldEnum[]
  }

  /**
   * TMDBImage create
   */
  export type TMDBImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * The data needed to create a TMDBImage.
     */
    data: XOR<TMDBImageCreateInput, TMDBImageUncheckedCreateInput>
  }

  /**
   * TMDBImage createMany
   */
  export type TMDBImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TMDBImages.
     */
    data: TMDBImageCreateManyInput | TMDBImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TMDBImage createManyAndReturn
   */
  export type TMDBImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * The data used to create many TMDBImages.
     */
    data: TMDBImageCreateManyInput | TMDBImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TMDBImage update
   */
  export type TMDBImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * The data needed to update a TMDBImage.
     */
    data: XOR<TMDBImageUpdateInput, TMDBImageUncheckedUpdateInput>
    /**
     * Choose, which TMDBImage to update.
     */
    where: TMDBImageWhereUniqueInput
  }

  /**
   * TMDBImage updateMany
   */
  export type TMDBImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TMDBImages.
     */
    data: XOR<TMDBImageUpdateManyMutationInput, TMDBImageUncheckedUpdateManyInput>
    /**
     * Filter which TMDBImages to update
     */
    where?: TMDBImageWhereInput
    /**
     * Limit how many TMDBImages to update.
     */
    limit?: number
  }

  /**
   * TMDBImage updateManyAndReturn
   */
  export type TMDBImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * The data used to update TMDBImages.
     */
    data: XOR<TMDBImageUpdateManyMutationInput, TMDBImageUncheckedUpdateManyInput>
    /**
     * Filter which TMDBImages to update
     */
    where?: TMDBImageWhereInput
    /**
     * Limit how many TMDBImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TMDBImage upsert
   */
  export type TMDBImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * The filter to search for the TMDBImage to update in case it exists.
     */
    where: TMDBImageWhereUniqueInput
    /**
     * In case the TMDBImage found by the `where` argument doesn't exist, create a new TMDBImage with this data.
     */
    create: XOR<TMDBImageCreateInput, TMDBImageUncheckedCreateInput>
    /**
     * In case the TMDBImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TMDBImageUpdateInput, TMDBImageUncheckedUpdateInput>
  }

  /**
   * TMDBImage delete
   */
  export type TMDBImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    /**
     * Filter which TMDBImage to delete.
     */
    where: TMDBImageWhereUniqueInput
  }

  /**
   * TMDBImage deleteMany
   */
  export type TMDBImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TMDBImages to delete
     */
    where?: TMDBImageWhereInput
    /**
     * Limit how many TMDBImages to delete.
     */
    limit?: number
  }

  /**
   * TMDBImage.show
   */
  export type TMDBImage$showArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
  }

  /**
   * TMDBImage.season
   */
  export type TMDBImage$seasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    where?: SeasonWhereInput
  }

  /**
   * TMDBImage.episode
   */
  export type TMDBImage$episodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
  }

  /**
   * TMDBImage without action
   */
  export type TMDBImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
  }


  /**
   * Model Season
   */

  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    number: number | null
    showId: number | null
  }

  export type SeasonSumAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    number: number | null
    showId: number | null
  }

  export type SeasonMinAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    number: number | null
    showId: number | null
    updatedAt: Date | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    number: number | null
    showId: number | null
    updatedAt: Date | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    tmdbId: number
    number: number
    showId: number
    updatedAt: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    showId?: true
  }

  export type SeasonSumAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    showId?: true
  }

  export type SeasonMinAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    showId?: true
    updatedAt?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    showId?: true
    updatedAt?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    showId?: true
    updatedAt?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Season to aggregate.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithAggregationInput | SeasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }

  export type SeasonGroupByOutputType = {
    id: number
    tmdbId: number
    number: number
    showId: number
    updatedAt: Date
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    number?: boolean
    showId?: boolean
    updatedAt?: boolean
    episodes?: boolean | Season$episodesArgs<ExtArgs>
    images?: boolean | Season$imagesArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    number?: boolean
    showId?: boolean
    updatedAt?: boolean
    show?: boolean | ShowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    number?: boolean
    showId?: boolean
    updatedAt?: boolean
    show?: boolean | ShowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectScalar = {
    id?: boolean
    tmdbId?: boolean
    number?: boolean
    showId?: boolean
    updatedAt?: boolean
  }

  export type SeasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tmdbId" | "number" | "showId" | "updatedAt", ExtArgs["result"]["season"]>
  export type SeasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Season$episodesArgs<ExtArgs>
    images?: boolean | Season$imagesArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeasonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | ShowDefaultArgs<ExtArgs>
  }
  export type SeasonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | ShowDefaultArgs<ExtArgs>
  }

  export type $SeasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Season"
    objects: {
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      images: Prisma.$TMDBImagePayload<ExtArgs>[]
      show: Prisma.$ShowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tmdbId: number
      number: number
      showId: number
      updatedAt: Date
    }, ExtArgs["result"]["season"]>
    composites: {}
  }

  type SeasonGetPayload<S extends boolean | null | undefined | SeasonDefaultArgs> = $Result.GetResult<Prisma.$SeasonPayload, S>

  type SeasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface SeasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Season'], meta: { name: 'Season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonFindUniqueArgs>(args: SelectSubset<T, SeasonFindUniqueArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Season that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonFindFirstArgs>(args?: SelectSubset<T, SeasonFindFirstArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonFindManyArgs>(args?: SelectSubset<T, SeasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
     */
    create<T extends SeasonCreateArgs>(args: SelectSubset<T, SeasonCreateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seasons.
     * @param {SeasonCreateManyArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonCreateManyArgs>(args?: SelectSubset<T, SeasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seasons and returns the data saved in the database.
     * @param {SeasonCreateManyAndReturnArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
     */
    delete<T extends SeasonDeleteArgs>(args: SelectSubset<T, SeasonDeleteArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonUpdateArgs>(args: SelectSubset<T, SeasonUpdateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonDeleteManyArgs>(args?: SelectSubset<T, SeasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonUpdateManyArgs>(args: SelectSubset<T, SeasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons and returns the data updated in the database.
     * @param {SeasonUpdateManyAndReturnArgs} args - Arguments to update many Seasons.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeasonUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
     */
    upsert<T extends SeasonUpsertArgs>(args: SelectSubset<T, SeasonUpsertArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Season model
   */
  readonly fields: SeasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends Season$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Season$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Season$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Season$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    show<T extends ShowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowDefaultArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Season model
   */
  interface SeasonFieldRefs {
    readonly id: FieldRef<"Season", 'Int'>
    readonly tmdbId: FieldRef<"Season", 'Int'>
    readonly number: FieldRef<"Season", 'Int'>
    readonly showId: FieldRef<"Season", 'Int'>
    readonly updatedAt: FieldRef<"Season", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Season findUnique
   */
  export type SeasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findFirst
   */
  export type SeasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findMany
   */
  export type SeasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season create
   */
  export type SeasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to create a Season.
     */
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }

  /**
   * Season createMany
   */
  export type SeasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Season createManyAndReturn
   */
  export type SeasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Season update
   */
  export type SeasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to update a Season.
     */
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Season updateManyAndReturn
   */
  export type SeasonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Season upsert
   */
  export type SeasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The filter to search for the Season to update in case it exists.
     */
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     */
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }

  /**
   * Season delete
   */
  export type SeasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter which Season to delete.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to delete
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to delete.
     */
    limit?: number
  }

  /**
   * Season.episodes
   */
  export type Season$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Season.images
   */
  export type Season$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    where?: TMDBImageWhereInput
    orderBy?: TMDBImageOrderByWithRelationInput | TMDBImageOrderByWithRelationInput[]
    cursor?: TMDBImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TMDBImageScalarFieldEnum | TMDBImageScalarFieldEnum[]
  }

  /**
   * Season without action
   */
  export type SeasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    number: number | null
    seasonId: number | null
    duration: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    number: number | null
    seasonId: number | null
    duration: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    number: number | null
    seasonId: number | null
    name: string | null
    cover: string | null
    duration: number | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    number: number | null
    seasonId: number | null
    name: string | null
    cover: string | null
    duration: number | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    tmdbId: number
    number: number
    seasonId: number
    name: number
    cover: number
    duration: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    seasonId?: true
    duration?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    seasonId?: true
    duration?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    seasonId?: true
    name?: true
    cover?: true
    duration?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    seasonId?: true
    name?: true
    cover?: true
    duration?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    tmdbId?: true
    number?: true
    seasonId?: true
    name?: true
    cover?: true
    duration?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: number
    tmdbId: number
    number: number
    seasonId: number
    name: string
    cover: string | null
    duration: number | null
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    number?: boolean
    seasonId?: boolean
    name?: boolean
    cover?: boolean
    duration?: boolean
    updatedAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    User?: boolean | Episode$UserArgs<ExtArgs>
    images?: boolean | Episode$imagesArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    number?: boolean
    seasonId?: boolean
    name?: boolean
    cover?: boolean
    duration?: boolean
    updatedAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    number?: boolean
    seasonId?: boolean
    name?: boolean
    cover?: boolean
    duration?: boolean
    updatedAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    tmdbId?: boolean
    number?: boolean
    seasonId?: boolean
    name?: boolean
    cover?: boolean
    duration?: boolean
    updatedAt?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tmdbId" | "number" | "seasonId" | "name" | "cover" | "duration" | "updatedAt", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    User?: boolean | Episode$UserArgs<ExtArgs>
    images?: boolean | Episode$imagesArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      season: Prisma.$SeasonPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>[]
      images: Prisma.$TMDBImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tmdbId: number
      number: number
      seasonId: number
      name: string
      cover: string | null
      duration: number | null
      updatedAt: Date
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    season<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends Episode$UserArgs<ExtArgs> = {}>(args?: Subset<T, Episode$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Episode$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Episode$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TMDBImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'Int'>
    readonly tmdbId: FieldRef<"Episode", 'Int'>
    readonly number: FieldRef<"Episode", 'Int'>
    readonly seasonId: FieldRef<"Episode", 'Int'>
    readonly name: FieldRef<"Episode", 'String'>
    readonly cover: FieldRef<"Episode", 'String'>
    readonly duration: FieldRef<"Episode", 'Int'>
    readonly updatedAt: FieldRef<"Episode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode.User
   */
  export type Episode$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Episode.images
   */
  export type Episode$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TMDBImage
     */
    select?: TMDBImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TMDBImage
     */
    omit?: TMDBImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TMDBImageInclude<ExtArgs> | null
    where?: TMDBImageWhereInput
    orderBy?: TMDBImageOrderByWithRelationInput | TMDBImageOrderByWithRelationInput[]
    cursor?: TMDBImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TMDBImageScalarFieldEnum | TMDBImageScalarFieldEnum[]
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    profilePicture: 'profilePicture',
    statsId: 'statsId',
    preferencesId: 'preferencesId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StatsScalarFieldEnum: {
    id: 'id',
    loved: 'loved',
    followed: 'followed',
    seriesWatchTime: 'seriesWatchTime',
    seriesWatched: 'seriesWatched',
    moviesWatchTime: 'moviesWatchTime',
    moviesWatched: 'moviesWatched'
  };

  export type StatsScalarFieldEnum = (typeof StatsScalarFieldEnum)[keyof typeof StatsScalarFieldEnum]


  export const PreferencesScalarFieldEnum: {
    id: 'id',
    gridView: 'gridView',
    toWatch: 'toWatch',
    defaultPage: 'defaultPage'
  };

  export type PreferencesScalarFieldEnum = (typeof PreferencesScalarFieldEnum)[keyof typeof PreferencesScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const ShowScalarFieldEnum: {
    id: 'id',
    tmdbId: 'tmdbId',
    type: 'type',
    adult: 'adult',
    popularity: 'popularity',
    name: 'name',
    listId: 'listId',
    updatedAt: 'updatedAt'
  };

  export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum]


  export const TMDBImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    showId: 'showId',
    seasonId: 'seasonId',
    episodeId: 'episodeId'
  };

  export type TMDBImageScalarFieldEnum = (typeof TMDBImageScalarFieldEnum)[keyof typeof TMDBImageScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    id: 'id',
    tmdbId: 'tmdbId',
    number: 'number',
    showId: 'showId',
    updatedAt: 'updatedAt'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    tmdbId: 'tmdbId',
    number: 'number',
    seasonId: 'seasonId',
    name: 'name',
    cover: 'cover',
    duration: 'duration',
    updatedAt: 'updatedAt'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DefaultPage'
   */
  export type EnumDefaultPageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DefaultPage'>
    


  /**
   * Reference to a field of type 'DefaultPage[]'
   */
  export type ListEnumDefaultPageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DefaultPage[]'>
    


  /**
   * Reference to a field of type 'Show_Type'
   */
  export type EnumShow_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Show_Type'>
    


  /**
   * Reference to a field of type 'Show_Type[]'
   */
  export type ListEnumShow_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Show_Type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Image_Type'
   */
  export type EnumImage_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Image_Type'>
    


  /**
   * Reference to a field of type 'Image_Type[]'
   */
  export type ListEnumImage_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Image_Type[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    profilePicture?: StringFilter<"User"> | string
    statsId?: StringFilter<"User"> | string
    preferencesId?: StringFilter<"User"> | string
    list?: ListListRelationFilter
    stats?: XOR<StatsScalarRelationFilter, StatsWhereInput>
    preferences?: XOR<PreferencesScalarRelationFilter, PreferencesWhereInput>
    watchedEpisodes?: EpisodeListRelationFilter
    followedShows?: ShowListRelationFilter
    lovedShows?: ShowListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrder
    statsId?: SortOrder
    preferencesId?: SortOrder
    list?: ListOrderByRelationAggregateInput
    stats?: StatsOrderByWithRelationInput
    preferences?: PreferencesOrderByWithRelationInput
    watchedEpisodes?: EpisodeOrderByRelationAggregateInput
    followedShows?: ShowOrderByRelationAggregateInput
    lovedShows?: ShowOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    statsId?: string
    preferencesId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    profilePicture?: StringFilter<"User"> | string
    list?: ListListRelationFilter
    stats?: XOR<StatsScalarRelationFilter, StatsWhereInput>
    preferences?: XOR<PreferencesScalarRelationFilter, PreferencesWhereInput>
    watchedEpisodes?: EpisodeListRelationFilter
    followedShows?: ShowListRelationFilter
    lovedShows?: ShowListRelationFilter
  }, "id" | "username" | "statsId" | "preferencesId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrder
    statsId?: SortOrder
    preferencesId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringWithAggregatesFilter<"User"> | string
    statsId?: StringWithAggregatesFilter<"User"> | string
    preferencesId?: StringWithAggregatesFilter<"User"> | string
  }

  export type StatsWhereInput = {
    AND?: StatsWhereInput | StatsWhereInput[]
    OR?: StatsWhereInput[]
    NOT?: StatsWhereInput | StatsWhereInput[]
    id?: StringFilter<"Stats"> | string
    loved?: IntFilter<"Stats"> | number
    followed?: IntFilter<"Stats"> | number
    seriesWatchTime?: IntFilter<"Stats"> | number
    seriesWatched?: IntFilter<"Stats"> | number
    moviesWatchTime?: IntFilter<"Stats"> | number
    moviesWatched?: IntFilter<"Stats"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type StatsOrderByWithRelationInput = {
    id?: SortOrder
    loved?: SortOrder
    followed?: SortOrder
    seriesWatchTime?: SortOrder
    seriesWatched?: SortOrder
    moviesWatchTime?: SortOrder
    moviesWatched?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatsWhereInput | StatsWhereInput[]
    OR?: StatsWhereInput[]
    NOT?: StatsWhereInput | StatsWhereInput[]
    loved?: IntFilter<"Stats"> | number
    followed?: IntFilter<"Stats"> | number
    seriesWatchTime?: IntFilter<"Stats"> | number
    seriesWatched?: IntFilter<"Stats"> | number
    moviesWatchTime?: IntFilter<"Stats"> | number
    moviesWatched?: IntFilter<"Stats"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type StatsOrderByWithAggregationInput = {
    id?: SortOrder
    loved?: SortOrder
    followed?: SortOrder
    seriesWatchTime?: SortOrder
    seriesWatched?: SortOrder
    moviesWatchTime?: SortOrder
    moviesWatched?: SortOrder
    _count?: StatsCountOrderByAggregateInput
    _avg?: StatsAvgOrderByAggregateInput
    _max?: StatsMaxOrderByAggregateInput
    _min?: StatsMinOrderByAggregateInput
    _sum?: StatsSumOrderByAggregateInput
  }

  export type StatsScalarWhereWithAggregatesInput = {
    AND?: StatsScalarWhereWithAggregatesInput | StatsScalarWhereWithAggregatesInput[]
    OR?: StatsScalarWhereWithAggregatesInput[]
    NOT?: StatsScalarWhereWithAggregatesInput | StatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stats"> | string
    loved?: IntWithAggregatesFilter<"Stats"> | number
    followed?: IntWithAggregatesFilter<"Stats"> | number
    seriesWatchTime?: IntWithAggregatesFilter<"Stats"> | number
    seriesWatched?: IntWithAggregatesFilter<"Stats"> | number
    moviesWatchTime?: IntWithAggregatesFilter<"Stats"> | number
    moviesWatched?: IntWithAggregatesFilter<"Stats"> | number
  }

  export type PreferencesWhereInput = {
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    id?: StringFilter<"Preferences"> | string
    gridView?: BoolFilter<"Preferences"> | boolean
    toWatch?: BoolFilter<"Preferences"> | boolean
    defaultPage?: EnumDefaultPageFilter<"Preferences"> | $Enums.DefaultPage
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PreferencesOrderByWithRelationInput = {
    id?: SortOrder
    gridView?: SortOrder
    toWatch?: SortOrder
    defaultPage?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    gridView?: BoolFilter<"Preferences"> | boolean
    toWatch?: BoolFilter<"Preferences"> | boolean
    defaultPage?: EnumDefaultPageFilter<"Preferences"> | $Enums.DefaultPage
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    gridView?: SortOrder
    toWatch?: SortOrder
    defaultPage?: SortOrder
    _count?: PreferencesCountOrderByAggregateInput
    _max?: PreferencesMaxOrderByAggregateInput
    _min?: PreferencesMinOrderByAggregateInput
  }

  export type PreferencesScalarWhereWithAggregatesInput = {
    AND?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    OR?: PreferencesScalarWhereWithAggregatesInput[]
    NOT?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Preferences"> | string
    gridView?: BoolWithAggregatesFilter<"Preferences"> | boolean
    toWatch?: BoolWithAggregatesFilter<"Preferences"> | boolean
    defaultPage?: EnumDefaultPageWithAggregatesFilter<"Preferences"> | $Enums.DefaultPage
  }

  export type ListWhereInput = {
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    id?: StringFilter<"List"> | string
    name?: StringFilter<"List"> | string
    userId?: StringFilter<"List"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Shows?: ShowListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    Shows?: ShowOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    name?: StringFilter<"List"> | string
    userId?: StringFilter<"List"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Shows?: ShowListRelationFilter
  }, "id">

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    OR?: ListScalarWhereWithAggregatesInput[]
    NOT?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"List"> | string
    name?: StringWithAggregatesFilter<"List"> | string
    userId?: StringWithAggregatesFilter<"List"> | string
  }

  export type ShowWhereInput = {
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    id?: IntFilter<"Show"> | number
    tmdbId?: IntFilter<"Show"> | number
    type?: EnumShow_TypeFilter<"Show"> | $Enums.Show_Type
    adult?: BoolFilter<"Show"> | boolean
    popularity?: FloatFilter<"Show"> | number
    name?: StringFilter<"Show"> | string
    listId?: StringNullableFilter<"Show"> | string | null
    updatedAt?: DateTimeFilter<"Show"> | Date | string
    seasons?: SeasonListRelationFilter
    list?: XOR<ListNullableScalarRelationFilter, ListWhereInput> | null
    user?: UserListRelationFilter
    lovedBy?: UserListRelationFilter
    images?: TMDBImageListRelationFilter
  }

  export type ShowOrderByWithRelationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    type?: SortOrder
    adult?: SortOrder
    popularity?: SortOrder
    name?: SortOrder
    listId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    seasons?: SeasonOrderByRelationAggregateInput
    list?: ListOrderByWithRelationInput
    user?: UserOrderByRelationAggregateInput
    lovedBy?: UserOrderByRelationAggregateInput
    images?: TMDBImageOrderByRelationAggregateInput
  }

  export type ShowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tmdbId?: number
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    type?: EnumShow_TypeFilter<"Show"> | $Enums.Show_Type
    adult?: BoolFilter<"Show"> | boolean
    popularity?: FloatFilter<"Show"> | number
    name?: StringFilter<"Show"> | string
    listId?: StringNullableFilter<"Show"> | string | null
    updatedAt?: DateTimeFilter<"Show"> | Date | string
    seasons?: SeasonListRelationFilter
    list?: XOR<ListNullableScalarRelationFilter, ListWhereInput> | null
    user?: UserListRelationFilter
    lovedBy?: UserListRelationFilter
    images?: TMDBImageListRelationFilter
  }, "id" | "tmdbId">

  export type ShowOrderByWithAggregationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    type?: SortOrder
    adult?: SortOrder
    popularity?: SortOrder
    name?: SortOrder
    listId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ShowCountOrderByAggregateInput
    _avg?: ShowAvgOrderByAggregateInput
    _max?: ShowMaxOrderByAggregateInput
    _min?: ShowMinOrderByAggregateInput
    _sum?: ShowSumOrderByAggregateInput
  }

  export type ShowScalarWhereWithAggregatesInput = {
    AND?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    OR?: ShowScalarWhereWithAggregatesInput[]
    NOT?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Show"> | number
    tmdbId?: IntWithAggregatesFilter<"Show"> | number
    type?: EnumShow_TypeWithAggregatesFilter<"Show"> | $Enums.Show_Type
    adult?: BoolWithAggregatesFilter<"Show"> | boolean
    popularity?: FloatWithAggregatesFilter<"Show"> | number
    name?: StringWithAggregatesFilter<"Show"> | string
    listId?: StringNullableWithAggregatesFilter<"Show"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Show"> | Date | string
  }

  export type TMDBImageWhereInput = {
    AND?: TMDBImageWhereInput | TMDBImageWhereInput[]
    OR?: TMDBImageWhereInput[]
    NOT?: TMDBImageWhereInput | TMDBImageWhereInput[]
    id?: IntFilter<"TMDBImage"> | number
    url?: StringFilter<"TMDBImage"> | string
    type?: EnumImage_TypeFilter<"TMDBImage"> | $Enums.Image_Type
    showId?: IntNullableFilter<"TMDBImage"> | number | null
    seasonId?: IntNullableFilter<"TMDBImage"> | number | null
    episodeId?: IntNullableFilter<"TMDBImage"> | number | null
    show?: XOR<ShowNullableScalarRelationFilter, ShowWhereInput> | null
    season?: XOR<SeasonNullableScalarRelationFilter, SeasonWhereInput> | null
    episode?: XOR<EpisodeNullableScalarRelationFilter, EpisodeWhereInput> | null
  }

  export type TMDBImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    showId?: SortOrderInput | SortOrder
    seasonId?: SortOrderInput | SortOrder
    episodeId?: SortOrderInput | SortOrder
    show?: ShowOrderByWithRelationInput
    season?: SeasonOrderByWithRelationInput
    episode?: EpisodeOrderByWithRelationInput
  }

  export type TMDBImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TMDBImageWhereInput | TMDBImageWhereInput[]
    OR?: TMDBImageWhereInput[]
    NOT?: TMDBImageWhereInput | TMDBImageWhereInput[]
    url?: StringFilter<"TMDBImage"> | string
    type?: EnumImage_TypeFilter<"TMDBImage"> | $Enums.Image_Type
    showId?: IntNullableFilter<"TMDBImage"> | number | null
    seasonId?: IntNullableFilter<"TMDBImage"> | number | null
    episodeId?: IntNullableFilter<"TMDBImage"> | number | null
    show?: XOR<ShowNullableScalarRelationFilter, ShowWhereInput> | null
    season?: XOR<SeasonNullableScalarRelationFilter, SeasonWhereInput> | null
    episode?: XOR<EpisodeNullableScalarRelationFilter, EpisodeWhereInput> | null
  }, "id">

  export type TMDBImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    showId?: SortOrderInput | SortOrder
    seasonId?: SortOrderInput | SortOrder
    episodeId?: SortOrderInput | SortOrder
    _count?: TMDBImageCountOrderByAggregateInput
    _avg?: TMDBImageAvgOrderByAggregateInput
    _max?: TMDBImageMaxOrderByAggregateInput
    _min?: TMDBImageMinOrderByAggregateInput
    _sum?: TMDBImageSumOrderByAggregateInput
  }

  export type TMDBImageScalarWhereWithAggregatesInput = {
    AND?: TMDBImageScalarWhereWithAggregatesInput | TMDBImageScalarWhereWithAggregatesInput[]
    OR?: TMDBImageScalarWhereWithAggregatesInput[]
    NOT?: TMDBImageScalarWhereWithAggregatesInput | TMDBImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TMDBImage"> | number
    url?: StringWithAggregatesFilter<"TMDBImage"> | string
    type?: EnumImage_TypeWithAggregatesFilter<"TMDBImage"> | $Enums.Image_Type
    showId?: IntNullableWithAggregatesFilter<"TMDBImage"> | number | null
    seasonId?: IntNullableWithAggregatesFilter<"TMDBImage"> | number | null
    episodeId?: IntNullableWithAggregatesFilter<"TMDBImage"> | number | null
  }

  export type SeasonWhereInput = {
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    id?: IntFilter<"Season"> | number
    tmdbId?: IntFilter<"Season"> | number
    number?: IntFilter<"Season"> | number
    showId?: IntFilter<"Season"> | number
    updatedAt?: DateTimeFilter<"Season"> | Date | string
    episodes?: EpisodeListRelationFilter
    images?: TMDBImageListRelationFilter
    show?: XOR<ShowScalarRelationFilter, ShowWhereInput>
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    showId?: SortOrder
    updatedAt?: SortOrder
    episodes?: EpisodeOrderByRelationAggregateInput
    images?: TMDBImageOrderByRelationAggregateInput
    show?: ShowOrderByWithRelationInput
  }

  export type SeasonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tmdbId?: number
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    number?: IntFilter<"Season"> | number
    showId?: IntFilter<"Season"> | number
    updatedAt?: DateTimeFilter<"Season"> | Date | string
    episodes?: EpisodeListRelationFilter
    images?: TMDBImageListRelationFilter
    show?: XOR<ShowScalarRelationFilter, ShowWhereInput>
  }, "id" | "tmdbId">

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    showId?: SortOrder
    updatedAt?: SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _avg?: SeasonAvgOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
    _sum?: SeasonSumOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    OR?: SeasonScalarWhereWithAggregatesInput[]
    NOT?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Season"> | number
    tmdbId?: IntWithAggregatesFilter<"Season"> | number
    number?: IntWithAggregatesFilter<"Season"> | number
    showId?: IntWithAggregatesFilter<"Season"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Season"> | Date | string
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: IntFilter<"Episode"> | number
    tmdbId?: IntFilter<"Episode"> | number
    number?: IntFilter<"Episode"> | number
    seasonId?: IntFilter<"Episode"> | number
    name?: StringFilter<"Episode"> | string
    cover?: StringNullableFilter<"Episode"> | string | null
    duration?: IntNullableFilter<"Episode"> | number | null
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
    User?: UserListRelationFilter
    images?: TMDBImageListRelationFilter
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    seasonId?: SortOrder
    name?: SortOrder
    cover?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    season?: SeasonOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
    images?: TMDBImageOrderByRelationAggregateInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tmdbId?: number
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    number?: IntFilter<"Episode"> | number
    seasonId?: IntFilter<"Episode"> | number
    name?: StringFilter<"Episode"> | string
    cover?: StringNullableFilter<"Episode"> | string | null
    duration?: IntNullableFilter<"Episode"> | number | null
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
    User?: UserListRelationFilter
    images?: TMDBImageListRelationFilter
  }, "id" | "tmdbId">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    seasonId?: SortOrder
    name?: SortOrder
    cover?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Episode"> | number
    tmdbId?: IntWithAggregatesFilter<"Episode"> | number
    number?: IntWithAggregatesFilter<"Episode"> | number
    seasonId?: IntWithAggregatesFilter<"Episode"> | number
    name?: StringWithAggregatesFilter<"Episode"> | string
    cover?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Episode"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    profilePicture: string
    list?: ListCreateNestedManyWithoutUserInput
    stats: StatsCreateNestedOneWithoutUserInput
    preferences: PreferencesCreateNestedOneWithoutUserInput
    watchedEpisodes?: EpisodeCreateNestedManyWithoutUserInput
    followedShows?: ShowCreateNestedManyWithoutUserInput
    lovedShows?: ShowCreateNestedManyWithoutLovedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    profilePicture: string
    statsId: string
    preferencesId: string
    list?: ListUncheckedCreateNestedManyWithoutUserInput
    watchedEpisodes?: EpisodeUncheckedCreateNestedManyWithoutUserInput
    followedShows?: ShowUncheckedCreateNestedManyWithoutUserInput
    lovedShows?: ShowUncheckedCreateNestedManyWithoutLovedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    list?: ListUpdateManyWithoutUserNestedInput
    stats?: StatsUpdateOneRequiredWithoutUserNestedInput
    preferences?: PreferencesUpdateOneRequiredWithoutUserNestedInput
    watchedEpisodes?: EpisodeUpdateManyWithoutUserNestedInput
    followedShows?: ShowUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUpdateManyWithoutLovedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
    list?: ListUncheckedUpdateManyWithoutUserNestedInput
    watchedEpisodes?: EpisodeUncheckedUpdateManyWithoutUserNestedInput
    followedShows?: ShowUncheckedUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUncheckedUpdateManyWithoutLovedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    profilePicture: string
    statsId: string
    preferencesId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
  }

  export type StatsCreateInput = {
    id?: string
    loved: number
    followed: number
    seriesWatchTime: number
    seriesWatched: number
    moviesWatchTime: number
    moviesWatched: number
    user?: UserCreateNestedOneWithoutStatsInput
  }

  export type StatsUncheckedCreateInput = {
    id?: string
    loved: number
    followed: number
    seriesWatchTime: number
    seriesWatched: number
    moviesWatchTime: number
    moviesWatched: number
    user?: UserUncheckedCreateNestedOneWithoutStatsInput
  }

  export type StatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loved?: IntFieldUpdateOperationsInput | number
    followed?: IntFieldUpdateOperationsInput | number
    seriesWatchTime?: IntFieldUpdateOperationsInput | number
    seriesWatched?: IntFieldUpdateOperationsInput | number
    moviesWatchTime?: IntFieldUpdateOperationsInput | number
    moviesWatched?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutStatsNestedInput
  }

  export type StatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loved?: IntFieldUpdateOperationsInput | number
    followed?: IntFieldUpdateOperationsInput | number
    seriesWatchTime?: IntFieldUpdateOperationsInput | number
    seriesWatched?: IntFieldUpdateOperationsInput | number
    moviesWatchTime?: IntFieldUpdateOperationsInput | number
    moviesWatched?: IntFieldUpdateOperationsInput | number
    user?: UserUncheckedUpdateOneWithoutStatsNestedInput
  }

  export type StatsCreateManyInput = {
    id?: string
    loved: number
    followed: number
    seriesWatchTime: number
    seriesWatched: number
    moviesWatchTime: number
    moviesWatched: number
  }

  export type StatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    loved?: IntFieldUpdateOperationsInput | number
    followed?: IntFieldUpdateOperationsInput | number
    seriesWatchTime?: IntFieldUpdateOperationsInput | number
    seriesWatched?: IntFieldUpdateOperationsInput | number
    moviesWatchTime?: IntFieldUpdateOperationsInput | number
    moviesWatched?: IntFieldUpdateOperationsInput | number
  }

  export type StatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    loved?: IntFieldUpdateOperationsInput | number
    followed?: IntFieldUpdateOperationsInput | number
    seriesWatchTime?: IntFieldUpdateOperationsInput | number
    seriesWatched?: IntFieldUpdateOperationsInput | number
    moviesWatchTime?: IntFieldUpdateOperationsInput | number
    moviesWatched?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencesCreateInput = {
    id?: string
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: $Enums.DefaultPage
    user?: UserCreateNestedOneWithoutPreferencesInput
  }

  export type PreferencesUncheckedCreateInput = {
    id?: string
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: $Enums.DefaultPage
    user?: UserUncheckedCreateNestedOneWithoutPreferencesInput
  }

  export type PreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gridView?: BoolFieldUpdateOperationsInput | boolean
    toWatch?: BoolFieldUpdateOperationsInput | boolean
    defaultPage?: EnumDefaultPageFieldUpdateOperationsInput | $Enums.DefaultPage
    user?: UserUpdateOneWithoutPreferencesNestedInput
  }

  export type PreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gridView?: BoolFieldUpdateOperationsInput | boolean
    toWatch?: BoolFieldUpdateOperationsInput | boolean
    defaultPage?: EnumDefaultPageFieldUpdateOperationsInput | $Enums.DefaultPage
    user?: UserUncheckedUpdateOneWithoutPreferencesNestedInput
  }

  export type PreferencesCreateManyInput = {
    id?: string
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: $Enums.DefaultPage
  }

  export type PreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gridView?: BoolFieldUpdateOperationsInput | boolean
    toWatch?: BoolFieldUpdateOperationsInput | boolean
    defaultPage?: EnumDefaultPageFieldUpdateOperationsInput | $Enums.DefaultPage
  }

  export type PreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gridView?: BoolFieldUpdateOperationsInput | boolean
    toWatch?: BoolFieldUpdateOperationsInput | boolean
    defaultPage?: EnumDefaultPageFieldUpdateOperationsInput | $Enums.DefaultPage
  }

  export type ListCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutListInput
    Shows?: ShowCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    Shows?: ShowUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutListNestedInput
    Shows?: ShowUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    Shows?: ShowUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type ListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ShowCreateInput = {
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    updatedAt?: Date | string
    seasons?: SeasonCreateNestedManyWithoutShowInput
    list?: ListCreateNestedOneWithoutShowsInput
    user?: UserCreateNestedManyWithoutFollowedShowsInput
    lovedBy?: UserCreateNestedManyWithoutLovedShowsInput
    images?: TMDBImageCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateInput = {
    id?: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    listId?: string | null
    updatedAt?: Date | string
    seasons?: SeasonUncheckedCreateNestedManyWithoutShowInput
    user?: UserUncheckedCreateNestedManyWithoutFollowedShowsInput
    lovedBy?: UserUncheckedCreateNestedManyWithoutLovedShowsInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowUpdateInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUpdateManyWithoutShowNestedInput
    list?: ListUpdateOneWithoutShowsNestedInput
    user?: UserUpdateManyWithoutFollowedShowsNestedInput
    lovedBy?: UserUpdateManyWithoutLovedShowsNestedInput
    images?: TMDBImageUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUncheckedUpdateManyWithoutShowNestedInput
    user?: UserUncheckedUpdateManyWithoutFollowedShowsNestedInput
    lovedBy?: UserUncheckedUpdateManyWithoutLovedShowsNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowCreateManyInput = {
    id?: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    listId?: string | null
    updatedAt?: Date | string
  }

  export type ShowUpdateManyMutationInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TMDBImageCreateInput = {
    url: string
    type: $Enums.Image_Type
    show?: ShowCreateNestedOneWithoutImagesInput
    season?: SeasonCreateNestedOneWithoutImagesInput
    episode?: EpisodeCreateNestedOneWithoutImagesInput
  }

  export type TMDBImageUncheckedCreateInput = {
    id?: number
    url: string
    type: $Enums.Image_Type
    showId?: number | null
    seasonId?: number | null
    episodeId?: number | null
  }

  export type TMDBImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    show?: ShowUpdateOneWithoutImagesNestedInput
    season?: SeasonUpdateOneWithoutImagesNestedInput
    episode?: EpisodeUpdateOneWithoutImagesNestedInput
  }

  export type TMDBImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    showId?: NullableIntFieldUpdateOperationsInput | number | null
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TMDBImageCreateManyInput = {
    id?: number
    url: string
    type: $Enums.Image_Type
    showId?: number | null
    seasonId?: number | null
    episodeId?: number | null
  }

  export type TMDBImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
  }

  export type TMDBImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    showId?: NullableIntFieldUpdateOperationsInput | number | null
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeasonCreateInput = {
    tmdbId: number
    number: number
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutSeasonInput
    images?: TMDBImageCreateNestedManyWithoutSeasonInput
    show: ShowCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonUncheckedCreateInput = {
    id?: number
    tmdbId: number
    number: number
    showId: number
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeasonInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUpdateInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutSeasonNestedInput
    images?: TMDBImageUpdateManyWithoutSeasonNestedInput
    show?: ShowUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutSeasonNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonCreateManyInput = {
    id?: number
    tmdbId: number
    number: number
    showId: number
    updatedAt?: Date | string
  }

  export type SeasonUpdateManyMutationInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateInput = {
    tmdbId: number
    number: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
    season: SeasonCreateNestedOneWithoutEpisodesInput
    User?: UserCreateNestedManyWithoutWatchedEpisodesInput
    images?: TMDBImageCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: number
    tmdbId: number
    number: number
    seasonId: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutWatchedEpisodesInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: SeasonUpdateOneRequiredWithoutEpisodesNestedInput
    User?: UserUpdateManyWithoutWatchedEpisodesNestedInput
    images?: TMDBImageUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutWatchedEpisodesNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    id?: number
    tmdbId: number
    number: number
    seasonId: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
  }

  export type EpisodeUpdateManyMutationInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ListListRelationFilter = {
    every?: ListWhereInput
    some?: ListWhereInput
    none?: ListWhereInput
  }

  export type StatsScalarRelationFilter = {
    is?: StatsWhereInput
    isNot?: StatsWhereInput
  }

  export type PreferencesScalarRelationFilter = {
    is?: PreferencesWhereInput
    isNot?: PreferencesWhereInput
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type ShowListRelationFilter = {
    every?: ShowWhereInput
    some?: ShowWhereInput
    none?: ShowWhereInput
  }

  export type ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrder
    statsId?: SortOrder
    preferencesId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrder
    statsId?: SortOrder
    preferencesId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrder
    statsId?: SortOrder
    preferencesId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StatsCountOrderByAggregateInput = {
    id?: SortOrder
    loved?: SortOrder
    followed?: SortOrder
    seriesWatchTime?: SortOrder
    seriesWatched?: SortOrder
    moviesWatchTime?: SortOrder
    moviesWatched?: SortOrder
  }

  export type StatsAvgOrderByAggregateInput = {
    loved?: SortOrder
    followed?: SortOrder
    seriesWatchTime?: SortOrder
    seriesWatched?: SortOrder
    moviesWatchTime?: SortOrder
    moviesWatched?: SortOrder
  }

  export type StatsMaxOrderByAggregateInput = {
    id?: SortOrder
    loved?: SortOrder
    followed?: SortOrder
    seriesWatchTime?: SortOrder
    seriesWatched?: SortOrder
    moviesWatchTime?: SortOrder
    moviesWatched?: SortOrder
  }

  export type StatsMinOrderByAggregateInput = {
    id?: SortOrder
    loved?: SortOrder
    followed?: SortOrder
    seriesWatchTime?: SortOrder
    seriesWatched?: SortOrder
    moviesWatchTime?: SortOrder
    moviesWatched?: SortOrder
  }

  export type StatsSumOrderByAggregateInput = {
    loved?: SortOrder
    followed?: SortOrder
    seriesWatchTime?: SortOrder
    seriesWatched?: SortOrder
    moviesWatchTime?: SortOrder
    moviesWatched?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumDefaultPageFilter<$PrismaModel = never> = {
    equals?: $Enums.DefaultPage | EnumDefaultPageFieldRefInput<$PrismaModel>
    in?: $Enums.DefaultPage[] | ListEnumDefaultPageFieldRefInput<$PrismaModel>
    notIn?: $Enums.DefaultPage[] | ListEnumDefaultPageFieldRefInput<$PrismaModel>
    not?: NestedEnumDefaultPageFilter<$PrismaModel> | $Enums.DefaultPage
  }

  export type PreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    gridView?: SortOrder
    toWatch?: SortOrder
    defaultPage?: SortOrder
  }

  export type PreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    gridView?: SortOrder
    toWatch?: SortOrder
    defaultPage?: SortOrder
  }

  export type PreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    gridView?: SortOrder
    toWatch?: SortOrder
    defaultPage?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDefaultPageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DefaultPage | EnumDefaultPageFieldRefInput<$PrismaModel>
    in?: $Enums.DefaultPage[] | ListEnumDefaultPageFieldRefInput<$PrismaModel>
    notIn?: $Enums.DefaultPage[] | ListEnumDefaultPageFieldRefInput<$PrismaModel>
    not?: NestedEnumDefaultPageWithAggregatesFilter<$PrismaModel> | $Enums.DefaultPage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDefaultPageFilter<$PrismaModel>
    _max?: NestedEnumDefaultPageFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type EnumShow_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Show_Type | EnumShow_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Show_Type[] | ListEnumShow_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Show_Type[] | ListEnumShow_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShow_TypeFilter<$PrismaModel> | $Enums.Show_Type
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SeasonListRelationFilter = {
    every?: SeasonWhereInput
    some?: SeasonWhereInput
    none?: SeasonWhereInput
  }

  export type ListNullableScalarRelationFilter = {
    is?: ListWhereInput | null
    isNot?: ListWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TMDBImageListRelationFilter = {
    every?: TMDBImageWhereInput
    some?: TMDBImageWhereInput
    none?: TMDBImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SeasonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TMDBImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowCountOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    type?: SortOrder
    adult?: SortOrder
    popularity?: SortOrder
    name?: SortOrder
    listId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowAvgOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    popularity?: SortOrder
  }

  export type ShowMaxOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    type?: SortOrder
    adult?: SortOrder
    popularity?: SortOrder
    name?: SortOrder
    listId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowMinOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    type?: SortOrder
    adult?: SortOrder
    popularity?: SortOrder
    name?: SortOrder
    listId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowSumOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    popularity?: SortOrder
  }

  export type EnumShow_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Show_Type | EnumShow_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Show_Type[] | ListEnumShow_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Show_Type[] | ListEnumShow_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShow_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Show_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShow_TypeFilter<$PrismaModel>
    _max?: NestedEnumShow_TypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumImage_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Image_Type | EnumImage_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Image_Type[] | ListEnumImage_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Image_Type[] | ListEnumImage_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImage_TypeFilter<$PrismaModel> | $Enums.Image_Type
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ShowNullableScalarRelationFilter = {
    is?: ShowWhereInput | null
    isNot?: ShowWhereInput | null
  }

  export type SeasonNullableScalarRelationFilter = {
    is?: SeasonWhereInput | null
    isNot?: SeasonWhereInput | null
  }

  export type EpisodeNullableScalarRelationFilter = {
    is?: EpisodeWhereInput | null
    isNot?: EpisodeWhereInput | null
  }

  export type TMDBImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    showId?: SortOrder
    seasonId?: SortOrder
    episodeId?: SortOrder
  }

  export type TMDBImageAvgOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    seasonId?: SortOrder
    episodeId?: SortOrder
  }

  export type TMDBImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    showId?: SortOrder
    seasonId?: SortOrder
    episodeId?: SortOrder
  }

  export type TMDBImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    showId?: SortOrder
    seasonId?: SortOrder
    episodeId?: SortOrder
  }

  export type TMDBImageSumOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    seasonId?: SortOrder
    episodeId?: SortOrder
  }

  export type EnumImage_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Image_Type | EnumImage_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Image_Type[] | ListEnumImage_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Image_Type[] | ListEnumImage_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImage_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Image_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImage_TypeFilter<$PrismaModel>
    _max?: NestedEnumImage_TypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ShowScalarRelationFilter = {
    is?: ShowWhereInput
    isNot?: ShowWhereInput
  }

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    showId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeasonAvgOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    showId?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    showId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    showId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeasonSumOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    showId?: SortOrder
  }

  export type SeasonScalarRelationFilter = {
    is?: SeasonWhereInput
    isNot?: SeasonWhereInput
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    seasonId?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    duration?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    seasonId?: SortOrder
    duration?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    seasonId?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    duration?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    seasonId?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    duration?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    number?: SortOrder
    seasonId?: SortOrder
    duration?: SortOrder
  }

  export type ListCreateNestedManyWithoutUserInput = {
    create?: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput> | ListCreateWithoutUserInput[] | ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCreateOrConnectWithoutUserInput | ListCreateOrConnectWithoutUserInput[]
    createMany?: ListCreateManyUserInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type StatsCreateNestedOneWithoutUserInput = {
    create?: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatsCreateOrConnectWithoutUserInput
    connect?: StatsWhereUniqueInput
  }

  export type PreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    connect?: PreferencesWhereUniqueInput
  }

  export type EpisodeCreateNestedManyWithoutUserInput = {
    create?: XOR<EpisodeCreateWithoutUserInput, EpisodeUncheckedCreateWithoutUserInput> | EpisodeCreateWithoutUserInput[] | EpisodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutUserInput | EpisodeCreateOrConnectWithoutUserInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type ShowCreateNestedManyWithoutUserInput = {
    create?: XOR<ShowCreateWithoutUserInput, ShowUncheckedCreateWithoutUserInput> | ShowCreateWithoutUserInput[] | ShowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutUserInput | ShowCreateOrConnectWithoutUserInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type ShowCreateNestedManyWithoutLovedByInput = {
    create?: XOR<ShowCreateWithoutLovedByInput, ShowUncheckedCreateWithoutLovedByInput> | ShowCreateWithoutLovedByInput[] | ShowUncheckedCreateWithoutLovedByInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutLovedByInput | ShowCreateOrConnectWithoutLovedByInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type ListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput> | ListCreateWithoutUserInput[] | ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCreateOrConnectWithoutUserInput | ListCreateOrConnectWithoutUserInput[]
    createMany?: ListCreateManyUserInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EpisodeCreateWithoutUserInput, EpisodeUncheckedCreateWithoutUserInput> | EpisodeCreateWithoutUserInput[] | EpisodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutUserInput | EpisodeCreateOrConnectWithoutUserInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type ShowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShowCreateWithoutUserInput, ShowUncheckedCreateWithoutUserInput> | ShowCreateWithoutUserInput[] | ShowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutUserInput | ShowCreateOrConnectWithoutUserInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type ShowUncheckedCreateNestedManyWithoutLovedByInput = {
    create?: XOR<ShowCreateWithoutLovedByInput, ShowUncheckedCreateWithoutLovedByInput> | ShowCreateWithoutLovedByInput[] | ShowUncheckedCreateWithoutLovedByInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutLovedByInput | ShowCreateOrConnectWithoutLovedByInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput> | ListCreateWithoutUserInput[] | ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCreateOrConnectWithoutUserInput | ListCreateOrConnectWithoutUserInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutUserInput | ListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListCreateManyUserInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutUserInput | ListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListUpdateManyWithWhereWithoutUserInput | ListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type StatsUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatsCreateOrConnectWithoutUserInput
    upsert?: StatsUpsertWithoutUserInput
    connect?: StatsWhereUniqueInput
    update?: XOR<XOR<StatsUpdateToOneWithWhereWithoutUserInput, StatsUpdateWithoutUserInput>, StatsUncheckedUpdateWithoutUserInput>
  }

  export type PreferencesUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    upsert?: PreferencesUpsertWithoutUserInput
    connect?: PreferencesWhereUniqueInput
    update?: XOR<XOR<PreferencesUpdateToOneWithWhereWithoutUserInput, PreferencesUpdateWithoutUserInput>, PreferencesUncheckedUpdateWithoutUserInput>
  }

  export type EpisodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EpisodeCreateWithoutUserInput, EpisodeUncheckedCreateWithoutUserInput> | EpisodeCreateWithoutUserInput[] | EpisodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutUserInput | EpisodeCreateOrConnectWithoutUserInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutUserInput | EpisodeUpsertWithWhereUniqueWithoutUserInput[]
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutUserInput | EpisodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutUserInput | EpisodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type ShowUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShowCreateWithoutUserInput, ShowUncheckedCreateWithoutUserInput> | ShowCreateWithoutUserInput[] | ShowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutUserInput | ShowCreateOrConnectWithoutUserInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutUserInput | ShowUpsertWithWhereUniqueWithoutUserInput[]
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutUserInput | ShowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutUserInput | ShowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type ShowUpdateManyWithoutLovedByNestedInput = {
    create?: XOR<ShowCreateWithoutLovedByInput, ShowUncheckedCreateWithoutLovedByInput> | ShowCreateWithoutLovedByInput[] | ShowUncheckedCreateWithoutLovedByInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutLovedByInput | ShowCreateOrConnectWithoutLovedByInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutLovedByInput | ShowUpsertWithWhereUniqueWithoutLovedByInput[]
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutLovedByInput | ShowUpdateWithWhereUniqueWithoutLovedByInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutLovedByInput | ShowUpdateManyWithWhereWithoutLovedByInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type ListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput> | ListCreateWithoutUserInput[] | ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCreateOrConnectWithoutUserInput | ListCreateOrConnectWithoutUserInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutUserInput | ListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListCreateManyUserInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutUserInput | ListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListUpdateManyWithWhereWithoutUserInput | ListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EpisodeCreateWithoutUserInput, EpisodeUncheckedCreateWithoutUserInput> | EpisodeCreateWithoutUserInput[] | EpisodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutUserInput | EpisodeCreateOrConnectWithoutUserInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutUserInput | EpisodeUpsertWithWhereUniqueWithoutUserInput[]
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutUserInput | EpisodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutUserInput | EpisodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type ShowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShowCreateWithoutUserInput, ShowUncheckedCreateWithoutUserInput> | ShowCreateWithoutUserInput[] | ShowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutUserInput | ShowCreateOrConnectWithoutUserInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutUserInput | ShowUpsertWithWhereUniqueWithoutUserInput[]
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutUserInput | ShowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutUserInput | ShowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type ShowUncheckedUpdateManyWithoutLovedByNestedInput = {
    create?: XOR<ShowCreateWithoutLovedByInput, ShowUncheckedCreateWithoutLovedByInput> | ShowCreateWithoutLovedByInput[] | ShowUncheckedCreateWithoutLovedByInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutLovedByInput | ShowCreateOrConnectWithoutLovedByInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutLovedByInput | ShowUpsertWithWhereUniqueWithoutLovedByInput[]
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutLovedByInput | ShowUpdateWithWhereUniqueWithoutLovedByInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutLovedByInput | ShowUpdateManyWithWhereWithoutLovedByInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStatsInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutStatsInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutStatsNestedInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    upsert?: UserUpsertWithoutStatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatsInput, UserUpdateWithoutStatsInput>, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserUncheckedUpdateOneWithoutStatsNestedInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    upsert?: UserUpsertWithoutStatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatsInput, UserUpdateWithoutStatsInput>, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumDefaultPageFieldUpdateOperationsInput = {
    set?: $Enums.DefaultPage
  }

  export type UserUpdateOneWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUncheckedUpdateOneWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutListInput = {
    create?: XOR<UserCreateWithoutListInput, UserUncheckedCreateWithoutListInput>
    connectOrCreate?: UserCreateOrConnectWithoutListInput
    connect?: UserWhereUniqueInput
  }

  export type ShowCreateNestedManyWithoutListInput = {
    create?: XOR<ShowCreateWithoutListInput, ShowUncheckedCreateWithoutListInput> | ShowCreateWithoutListInput[] | ShowUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutListInput | ShowCreateOrConnectWithoutListInput[]
    createMany?: ShowCreateManyListInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type ShowUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ShowCreateWithoutListInput, ShowUncheckedCreateWithoutListInput> | ShowCreateWithoutListInput[] | ShowUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutListInput | ShowCreateOrConnectWithoutListInput[]
    createMany?: ShowCreateManyListInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutListNestedInput = {
    create?: XOR<UserCreateWithoutListInput, UserUncheckedCreateWithoutListInput>
    connectOrCreate?: UserCreateOrConnectWithoutListInput
    upsert?: UserUpsertWithoutListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListInput, UserUpdateWithoutListInput>, UserUncheckedUpdateWithoutListInput>
  }

  export type ShowUpdateManyWithoutListNestedInput = {
    create?: XOR<ShowCreateWithoutListInput, ShowUncheckedCreateWithoutListInput> | ShowCreateWithoutListInput[] | ShowUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutListInput | ShowCreateOrConnectWithoutListInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutListInput | ShowUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ShowCreateManyListInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutListInput | ShowUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutListInput | ShowUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type ShowUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ShowCreateWithoutListInput, ShowUncheckedCreateWithoutListInput> | ShowCreateWithoutListInput[] | ShowUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutListInput | ShowCreateOrConnectWithoutListInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutListInput | ShowUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ShowCreateManyListInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutListInput | ShowUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutListInput | ShowUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type SeasonCreateNestedManyWithoutShowInput = {
    create?: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput> | SeasonCreateWithoutShowInput[] | SeasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutShowInput | SeasonCreateOrConnectWithoutShowInput[]
    createMany?: SeasonCreateManyShowInputEnvelope
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
  }

  export type ListCreateNestedOneWithoutShowsInput = {
    create?: XOR<ListCreateWithoutShowsInput, ListUncheckedCreateWithoutShowsInput>
    connectOrCreate?: ListCreateOrConnectWithoutShowsInput
    connect?: ListWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFollowedShowsInput = {
    create?: XOR<UserCreateWithoutFollowedShowsInput, UserUncheckedCreateWithoutFollowedShowsInput> | UserCreateWithoutFollowedShowsInput[] | UserUncheckedCreateWithoutFollowedShowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedShowsInput | UserCreateOrConnectWithoutFollowedShowsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutLovedShowsInput = {
    create?: XOR<UserCreateWithoutLovedShowsInput, UserUncheckedCreateWithoutLovedShowsInput> | UserCreateWithoutLovedShowsInput[] | UserUncheckedCreateWithoutLovedShowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLovedShowsInput | UserCreateOrConnectWithoutLovedShowsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TMDBImageCreateNestedManyWithoutShowInput = {
    create?: XOR<TMDBImageCreateWithoutShowInput, TMDBImageUncheckedCreateWithoutShowInput> | TMDBImageCreateWithoutShowInput[] | TMDBImageUncheckedCreateWithoutShowInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutShowInput | TMDBImageCreateOrConnectWithoutShowInput[]
    createMany?: TMDBImageCreateManyShowInputEnvelope
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
  }

  export type SeasonUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput> | SeasonCreateWithoutShowInput[] | SeasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutShowInput | SeasonCreateOrConnectWithoutShowInput[]
    createMany?: SeasonCreateManyShowInputEnvelope
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowedShowsInput = {
    create?: XOR<UserCreateWithoutFollowedShowsInput, UserUncheckedCreateWithoutFollowedShowsInput> | UserCreateWithoutFollowedShowsInput[] | UserUncheckedCreateWithoutFollowedShowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedShowsInput | UserCreateOrConnectWithoutFollowedShowsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLovedShowsInput = {
    create?: XOR<UserCreateWithoutLovedShowsInput, UserUncheckedCreateWithoutLovedShowsInput> | UserCreateWithoutLovedShowsInput[] | UserUncheckedCreateWithoutLovedShowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLovedShowsInput | UserCreateOrConnectWithoutLovedShowsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TMDBImageUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<TMDBImageCreateWithoutShowInput, TMDBImageUncheckedCreateWithoutShowInput> | TMDBImageCreateWithoutShowInput[] | TMDBImageUncheckedCreateWithoutShowInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutShowInput | TMDBImageCreateOrConnectWithoutShowInput[]
    createMany?: TMDBImageCreateManyShowInputEnvelope
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
  }

  export type EnumShow_TypeFieldUpdateOperationsInput = {
    set?: $Enums.Show_Type
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SeasonUpdateManyWithoutShowNestedInput = {
    create?: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput> | SeasonCreateWithoutShowInput[] | SeasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutShowInput | SeasonCreateOrConnectWithoutShowInput[]
    upsert?: SeasonUpsertWithWhereUniqueWithoutShowInput | SeasonUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: SeasonCreateManyShowInputEnvelope
    set?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    disconnect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    delete?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    update?: SeasonUpdateWithWhereUniqueWithoutShowInput | SeasonUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: SeasonUpdateManyWithWhereWithoutShowInput | SeasonUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
  }

  export type ListUpdateOneWithoutShowsNestedInput = {
    create?: XOR<ListCreateWithoutShowsInput, ListUncheckedCreateWithoutShowsInput>
    connectOrCreate?: ListCreateOrConnectWithoutShowsInput
    upsert?: ListUpsertWithoutShowsInput
    disconnect?: ListWhereInput | boolean
    delete?: ListWhereInput | boolean
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutShowsInput, ListUpdateWithoutShowsInput>, ListUncheckedUpdateWithoutShowsInput>
  }

  export type UserUpdateManyWithoutFollowedShowsNestedInput = {
    create?: XOR<UserCreateWithoutFollowedShowsInput, UserUncheckedCreateWithoutFollowedShowsInput> | UserCreateWithoutFollowedShowsInput[] | UserUncheckedCreateWithoutFollowedShowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedShowsInput | UserCreateOrConnectWithoutFollowedShowsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedShowsInput | UserUpsertWithWhereUniqueWithoutFollowedShowsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedShowsInput | UserUpdateWithWhereUniqueWithoutFollowedShowsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedShowsInput | UserUpdateManyWithWhereWithoutFollowedShowsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutLovedShowsNestedInput = {
    create?: XOR<UserCreateWithoutLovedShowsInput, UserUncheckedCreateWithoutLovedShowsInput> | UserCreateWithoutLovedShowsInput[] | UserUncheckedCreateWithoutLovedShowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLovedShowsInput | UserCreateOrConnectWithoutLovedShowsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLovedShowsInput | UserUpsertWithWhereUniqueWithoutLovedShowsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLovedShowsInput | UserUpdateWithWhereUniqueWithoutLovedShowsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLovedShowsInput | UserUpdateManyWithWhereWithoutLovedShowsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TMDBImageUpdateManyWithoutShowNestedInput = {
    create?: XOR<TMDBImageCreateWithoutShowInput, TMDBImageUncheckedCreateWithoutShowInput> | TMDBImageCreateWithoutShowInput[] | TMDBImageUncheckedCreateWithoutShowInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutShowInput | TMDBImageCreateOrConnectWithoutShowInput[]
    upsert?: TMDBImageUpsertWithWhereUniqueWithoutShowInput | TMDBImageUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: TMDBImageCreateManyShowInputEnvelope
    set?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    disconnect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    delete?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    update?: TMDBImageUpdateWithWhereUniqueWithoutShowInput | TMDBImageUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: TMDBImageUpdateManyWithWhereWithoutShowInput | TMDBImageUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: TMDBImageScalarWhereInput | TMDBImageScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SeasonUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput> | SeasonCreateWithoutShowInput[] | SeasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutShowInput | SeasonCreateOrConnectWithoutShowInput[]
    upsert?: SeasonUpsertWithWhereUniqueWithoutShowInput | SeasonUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: SeasonCreateManyShowInputEnvelope
    set?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    disconnect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    delete?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    update?: SeasonUpdateWithWhereUniqueWithoutShowInput | SeasonUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: SeasonUpdateManyWithWhereWithoutShowInput | SeasonUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowedShowsNestedInput = {
    create?: XOR<UserCreateWithoutFollowedShowsInput, UserUncheckedCreateWithoutFollowedShowsInput> | UserCreateWithoutFollowedShowsInput[] | UserUncheckedCreateWithoutFollowedShowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedShowsInput | UserCreateOrConnectWithoutFollowedShowsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedShowsInput | UserUpsertWithWhereUniqueWithoutFollowedShowsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedShowsInput | UserUpdateWithWhereUniqueWithoutFollowedShowsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedShowsInput | UserUpdateManyWithWhereWithoutFollowedShowsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLovedShowsNestedInput = {
    create?: XOR<UserCreateWithoutLovedShowsInput, UserUncheckedCreateWithoutLovedShowsInput> | UserCreateWithoutLovedShowsInput[] | UserUncheckedCreateWithoutLovedShowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLovedShowsInput | UserCreateOrConnectWithoutLovedShowsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLovedShowsInput | UserUpsertWithWhereUniqueWithoutLovedShowsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLovedShowsInput | UserUpdateWithWhereUniqueWithoutLovedShowsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLovedShowsInput | UserUpdateManyWithWhereWithoutLovedShowsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TMDBImageUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<TMDBImageCreateWithoutShowInput, TMDBImageUncheckedCreateWithoutShowInput> | TMDBImageCreateWithoutShowInput[] | TMDBImageUncheckedCreateWithoutShowInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutShowInput | TMDBImageCreateOrConnectWithoutShowInput[]
    upsert?: TMDBImageUpsertWithWhereUniqueWithoutShowInput | TMDBImageUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: TMDBImageCreateManyShowInputEnvelope
    set?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    disconnect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    delete?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    update?: TMDBImageUpdateWithWhereUniqueWithoutShowInput | TMDBImageUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: TMDBImageUpdateManyWithWhereWithoutShowInput | TMDBImageUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: TMDBImageScalarWhereInput | TMDBImageScalarWhereInput[]
  }

  export type ShowCreateNestedOneWithoutImagesInput = {
    create?: XOR<ShowCreateWithoutImagesInput, ShowUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ShowCreateOrConnectWithoutImagesInput
    connect?: ShowWhereUniqueInput
  }

  export type SeasonCreateNestedOneWithoutImagesInput = {
    create?: XOR<SeasonCreateWithoutImagesInput, SeasonUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutImagesInput
    connect?: SeasonWhereUniqueInput
  }

  export type EpisodeCreateNestedOneWithoutImagesInput = {
    create?: XOR<EpisodeCreateWithoutImagesInput, EpisodeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutImagesInput
    connect?: EpisodeWhereUniqueInput
  }

  export type EnumImage_TypeFieldUpdateOperationsInput = {
    set?: $Enums.Image_Type
  }

  export type ShowUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ShowCreateWithoutImagesInput, ShowUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ShowCreateOrConnectWithoutImagesInput
    upsert?: ShowUpsertWithoutImagesInput
    disconnect?: ShowWhereInput | boolean
    delete?: ShowWhereInput | boolean
    connect?: ShowWhereUniqueInput
    update?: XOR<XOR<ShowUpdateToOneWithWhereWithoutImagesInput, ShowUpdateWithoutImagesInput>, ShowUncheckedUpdateWithoutImagesInput>
  }

  export type SeasonUpdateOneWithoutImagesNestedInput = {
    create?: XOR<SeasonCreateWithoutImagesInput, SeasonUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutImagesInput
    upsert?: SeasonUpsertWithoutImagesInput
    disconnect?: SeasonWhereInput | boolean
    delete?: SeasonWhereInput | boolean
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutImagesInput, SeasonUpdateWithoutImagesInput>, SeasonUncheckedUpdateWithoutImagesInput>
  }

  export type EpisodeUpdateOneWithoutImagesNestedInput = {
    create?: XOR<EpisodeCreateWithoutImagesInput, EpisodeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutImagesInput
    upsert?: EpisodeUpsertWithoutImagesInput
    disconnect?: EpisodeWhereInput | boolean
    delete?: EpisodeWhereInput | boolean
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutImagesInput, EpisodeUpdateWithoutImagesInput>, EpisodeUncheckedUpdateWithoutImagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EpisodeCreateNestedManyWithoutSeasonInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type TMDBImageCreateNestedManyWithoutSeasonInput = {
    create?: XOR<TMDBImageCreateWithoutSeasonInput, TMDBImageUncheckedCreateWithoutSeasonInput> | TMDBImageCreateWithoutSeasonInput[] | TMDBImageUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutSeasonInput | TMDBImageCreateOrConnectWithoutSeasonInput[]
    createMany?: TMDBImageCreateManySeasonInputEnvelope
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
  }

  export type ShowCreateNestedOneWithoutSeasonsInput = {
    create?: XOR<ShowCreateWithoutSeasonsInput, ShowUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: ShowCreateOrConnectWithoutSeasonsInput
    connect?: ShowWhereUniqueInput
  }

  export type EpisodeUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type TMDBImageUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<TMDBImageCreateWithoutSeasonInput, TMDBImageUncheckedCreateWithoutSeasonInput> | TMDBImageCreateWithoutSeasonInput[] | TMDBImageUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutSeasonInput | TMDBImageCreateOrConnectWithoutSeasonInput[]
    createMany?: TMDBImageCreateManySeasonInputEnvelope
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
  }

  export type EpisodeUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeasonInput | EpisodeUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeasonInput | EpisodeUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeasonInput | EpisodeUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type TMDBImageUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<TMDBImageCreateWithoutSeasonInput, TMDBImageUncheckedCreateWithoutSeasonInput> | TMDBImageCreateWithoutSeasonInput[] | TMDBImageUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutSeasonInput | TMDBImageCreateOrConnectWithoutSeasonInput[]
    upsert?: TMDBImageUpsertWithWhereUniqueWithoutSeasonInput | TMDBImageUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: TMDBImageCreateManySeasonInputEnvelope
    set?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    disconnect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    delete?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    update?: TMDBImageUpdateWithWhereUniqueWithoutSeasonInput | TMDBImageUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: TMDBImageUpdateManyWithWhereWithoutSeasonInput | TMDBImageUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: TMDBImageScalarWhereInput | TMDBImageScalarWhereInput[]
  }

  export type ShowUpdateOneRequiredWithoutSeasonsNestedInput = {
    create?: XOR<ShowCreateWithoutSeasonsInput, ShowUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: ShowCreateOrConnectWithoutSeasonsInput
    upsert?: ShowUpsertWithoutSeasonsInput
    connect?: ShowWhereUniqueInput
    update?: XOR<XOR<ShowUpdateToOneWithWhereWithoutSeasonsInput, ShowUpdateWithoutSeasonsInput>, ShowUncheckedUpdateWithoutSeasonsInput>
  }

  export type EpisodeUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeasonInput | EpisodeUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeasonInput | EpisodeUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeasonInput | EpisodeUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type TMDBImageUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<TMDBImageCreateWithoutSeasonInput, TMDBImageUncheckedCreateWithoutSeasonInput> | TMDBImageCreateWithoutSeasonInput[] | TMDBImageUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutSeasonInput | TMDBImageCreateOrConnectWithoutSeasonInput[]
    upsert?: TMDBImageUpsertWithWhereUniqueWithoutSeasonInput | TMDBImageUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: TMDBImageCreateManySeasonInputEnvelope
    set?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    disconnect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    delete?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    update?: TMDBImageUpdateWithWhereUniqueWithoutSeasonInput | TMDBImageUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: TMDBImageUpdateManyWithWhereWithoutSeasonInput | TMDBImageUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: TMDBImageScalarWhereInput | TMDBImageScalarWhereInput[]
  }

  export type SeasonCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutEpisodesInput
    connect?: SeasonWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutWatchedEpisodesInput = {
    create?: XOR<UserCreateWithoutWatchedEpisodesInput, UserUncheckedCreateWithoutWatchedEpisodesInput> | UserCreateWithoutWatchedEpisodesInput[] | UserUncheckedCreateWithoutWatchedEpisodesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWatchedEpisodesInput | UserCreateOrConnectWithoutWatchedEpisodesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TMDBImageCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<TMDBImageCreateWithoutEpisodeInput, TMDBImageUncheckedCreateWithoutEpisodeInput> | TMDBImageCreateWithoutEpisodeInput[] | TMDBImageUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutEpisodeInput | TMDBImageCreateOrConnectWithoutEpisodeInput[]
    createMany?: TMDBImageCreateManyEpisodeInputEnvelope
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutWatchedEpisodesInput = {
    create?: XOR<UserCreateWithoutWatchedEpisodesInput, UserUncheckedCreateWithoutWatchedEpisodesInput> | UserCreateWithoutWatchedEpisodesInput[] | UserUncheckedCreateWithoutWatchedEpisodesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWatchedEpisodesInput | UserCreateOrConnectWithoutWatchedEpisodesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TMDBImageUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<TMDBImageCreateWithoutEpisodeInput, TMDBImageUncheckedCreateWithoutEpisodeInput> | TMDBImageCreateWithoutEpisodeInput[] | TMDBImageUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutEpisodeInput | TMDBImageCreateOrConnectWithoutEpisodeInput[]
    createMany?: TMDBImageCreateManyEpisodeInputEnvelope
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
  }

  export type SeasonUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutEpisodesInput
    upsert?: SeasonUpsertWithoutEpisodesInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutEpisodesInput, SeasonUpdateWithoutEpisodesInput>, SeasonUncheckedUpdateWithoutEpisodesInput>
  }

  export type UserUpdateManyWithoutWatchedEpisodesNestedInput = {
    create?: XOR<UserCreateWithoutWatchedEpisodesInput, UserUncheckedCreateWithoutWatchedEpisodesInput> | UserCreateWithoutWatchedEpisodesInput[] | UserUncheckedCreateWithoutWatchedEpisodesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWatchedEpisodesInput | UserCreateOrConnectWithoutWatchedEpisodesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWatchedEpisodesInput | UserUpsertWithWhereUniqueWithoutWatchedEpisodesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWatchedEpisodesInput | UserUpdateWithWhereUniqueWithoutWatchedEpisodesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWatchedEpisodesInput | UserUpdateManyWithWhereWithoutWatchedEpisodesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TMDBImageUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<TMDBImageCreateWithoutEpisodeInput, TMDBImageUncheckedCreateWithoutEpisodeInput> | TMDBImageCreateWithoutEpisodeInput[] | TMDBImageUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutEpisodeInput | TMDBImageCreateOrConnectWithoutEpisodeInput[]
    upsert?: TMDBImageUpsertWithWhereUniqueWithoutEpisodeInput | TMDBImageUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: TMDBImageCreateManyEpisodeInputEnvelope
    set?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    disconnect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    delete?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    update?: TMDBImageUpdateWithWhereUniqueWithoutEpisodeInput | TMDBImageUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: TMDBImageUpdateManyWithWhereWithoutEpisodeInput | TMDBImageUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: TMDBImageScalarWhereInput | TMDBImageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutWatchedEpisodesNestedInput = {
    create?: XOR<UserCreateWithoutWatchedEpisodesInput, UserUncheckedCreateWithoutWatchedEpisodesInput> | UserCreateWithoutWatchedEpisodesInput[] | UserUncheckedCreateWithoutWatchedEpisodesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWatchedEpisodesInput | UserCreateOrConnectWithoutWatchedEpisodesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWatchedEpisodesInput | UserUpsertWithWhereUniqueWithoutWatchedEpisodesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWatchedEpisodesInput | UserUpdateWithWhereUniqueWithoutWatchedEpisodesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWatchedEpisodesInput | UserUpdateManyWithWhereWithoutWatchedEpisodesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TMDBImageUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<TMDBImageCreateWithoutEpisodeInput, TMDBImageUncheckedCreateWithoutEpisodeInput> | TMDBImageCreateWithoutEpisodeInput[] | TMDBImageUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: TMDBImageCreateOrConnectWithoutEpisodeInput | TMDBImageCreateOrConnectWithoutEpisodeInput[]
    upsert?: TMDBImageUpsertWithWhereUniqueWithoutEpisodeInput | TMDBImageUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: TMDBImageCreateManyEpisodeInputEnvelope
    set?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    disconnect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    delete?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    connect?: TMDBImageWhereUniqueInput | TMDBImageWhereUniqueInput[]
    update?: TMDBImageUpdateWithWhereUniqueWithoutEpisodeInput | TMDBImageUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: TMDBImageUpdateManyWithWhereWithoutEpisodeInput | TMDBImageUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: TMDBImageScalarWhereInput | TMDBImageScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDefaultPageFilter<$PrismaModel = never> = {
    equals?: $Enums.DefaultPage | EnumDefaultPageFieldRefInput<$PrismaModel>
    in?: $Enums.DefaultPage[] | ListEnumDefaultPageFieldRefInput<$PrismaModel>
    notIn?: $Enums.DefaultPage[] | ListEnumDefaultPageFieldRefInput<$PrismaModel>
    not?: NestedEnumDefaultPageFilter<$PrismaModel> | $Enums.DefaultPage
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDefaultPageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DefaultPage | EnumDefaultPageFieldRefInput<$PrismaModel>
    in?: $Enums.DefaultPage[] | ListEnumDefaultPageFieldRefInput<$PrismaModel>
    notIn?: $Enums.DefaultPage[] | ListEnumDefaultPageFieldRefInput<$PrismaModel>
    not?: NestedEnumDefaultPageWithAggregatesFilter<$PrismaModel> | $Enums.DefaultPage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDefaultPageFilter<$PrismaModel>
    _max?: NestedEnumDefaultPageFilter<$PrismaModel>
  }

  export type NestedEnumShow_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Show_Type | EnumShow_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Show_Type[] | ListEnumShow_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Show_Type[] | ListEnumShow_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShow_TypeFilter<$PrismaModel> | $Enums.Show_Type
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumShow_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Show_Type | EnumShow_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Show_Type[] | ListEnumShow_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Show_Type[] | ListEnumShow_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShow_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Show_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShow_TypeFilter<$PrismaModel>
    _max?: NestedEnumShow_TypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumImage_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Image_Type | EnumImage_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Image_Type[] | ListEnumImage_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Image_Type[] | ListEnumImage_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImage_TypeFilter<$PrismaModel> | $Enums.Image_Type
  }

  export type NestedEnumImage_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Image_Type | EnumImage_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Image_Type[] | ListEnumImage_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Image_Type[] | ListEnumImage_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImage_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Image_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImage_TypeFilter<$PrismaModel>
    _max?: NestedEnumImage_TypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ListCreateWithoutUserInput = {
    id?: string
    name: string
    Shows?: ShowCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    Shows?: ShowUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutUserInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput>
  }

  export type ListCreateManyUserInputEnvelope = {
    data: ListCreateManyUserInput | ListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StatsCreateWithoutUserInput = {
    id?: string
    loved: number
    followed: number
    seriesWatchTime: number
    seriesWatched: number
    moviesWatchTime: number
    moviesWatched: number
  }

  export type StatsUncheckedCreateWithoutUserInput = {
    id?: string
    loved: number
    followed: number
    seriesWatchTime: number
    seriesWatched: number
    moviesWatchTime: number
    moviesWatched: number
  }

  export type StatsCreateOrConnectWithoutUserInput = {
    where: StatsWhereUniqueInput
    create: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
  }

  export type PreferencesCreateWithoutUserInput = {
    id?: string
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: $Enums.DefaultPage
  }

  export type PreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    gridView?: boolean
    toWatch?: boolean
    defaultPage?: $Enums.DefaultPage
  }

  export type PreferencesCreateOrConnectWithoutUserInput = {
    where: PreferencesWhereUniqueInput
    create: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
  }

  export type EpisodeCreateWithoutUserInput = {
    tmdbId: number
    number: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
    season: SeasonCreateNestedOneWithoutEpisodesInput
    images?: TMDBImageCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutUserInput = {
    id?: number
    tmdbId: number
    number: number
    seasonId: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
    images?: TMDBImageUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutUserInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutUserInput, EpisodeUncheckedCreateWithoutUserInput>
  }

  export type ShowCreateWithoutUserInput = {
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    updatedAt?: Date | string
    seasons?: SeasonCreateNestedManyWithoutShowInput
    list?: ListCreateNestedOneWithoutShowsInput
    lovedBy?: UserCreateNestedManyWithoutLovedShowsInput
    images?: TMDBImageCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutUserInput = {
    id?: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    listId?: string | null
    updatedAt?: Date | string
    seasons?: SeasonUncheckedCreateNestedManyWithoutShowInput
    lovedBy?: UserUncheckedCreateNestedManyWithoutLovedShowsInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutUserInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutUserInput, ShowUncheckedCreateWithoutUserInput>
  }

  export type ShowCreateWithoutLovedByInput = {
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    updatedAt?: Date | string
    seasons?: SeasonCreateNestedManyWithoutShowInput
    list?: ListCreateNestedOneWithoutShowsInput
    user?: UserCreateNestedManyWithoutFollowedShowsInput
    images?: TMDBImageCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutLovedByInput = {
    id?: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    listId?: string | null
    updatedAt?: Date | string
    seasons?: SeasonUncheckedCreateNestedManyWithoutShowInput
    user?: UserUncheckedCreateNestedManyWithoutFollowedShowsInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutLovedByInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutLovedByInput, ShowUncheckedCreateWithoutLovedByInput>
  }

  export type ListUpsertWithWhereUniqueWithoutUserInput = {
    where: ListWhereUniqueInput
    update: XOR<ListUpdateWithoutUserInput, ListUncheckedUpdateWithoutUserInput>
    create: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput>
  }

  export type ListUpdateWithWhereUniqueWithoutUserInput = {
    where: ListWhereUniqueInput
    data: XOR<ListUpdateWithoutUserInput, ListUncheckedUpdateWithoutUserInput>
  }

  export type ListUpdateManyWithWhereWithoutUserInput = {
    where: ListScalarWhereInput
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyWithoutUserInput>
  }

  export type ListScalarWhereInput = {
    AND?: ListScalarWhereInput | ListScalarWhereInput[]
    OR?: ListScalarWhereInput[]
    NOT?: ListScalarWhereInput | ListScalarWhereInput[]
    id?: StringFilter<"List"> | string
    name?: StringFilter<"List"> | string
    userId?: StringFilter<"List"> | string
  }

  export type StatsUpsertWithoutUserInput = {
    update: XOR<StatsUpdateWithoutUserInput, StatsUncheckedUpdateWithoutUserInput>
    create: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
    where?: StatsWhereInput
  }

  export type StatsUpdateToOneWithWhereWithoutUserInput = {
    where?: StatsWhereInput
    data: XOR<StatsUpdateWithoutUserInput, StatsUncheckedUpdateWithoutUserInput>
  }

  export type StatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loved?: IntFieldUpdateOperationsInput | number
    followed?: IntFieldUpdateOperationsInput | number
    seriesWatchTime?: IntFieldUpdateOperationsInput | number
    seriesWatched?: IntFieldUpdateOperationsInput | number
    moviesWatchTime?: IntFieldUpdateOperationsInput | number
    moviesWatched?: IntFieldUpdateOperationsInput | number
  }

  export type StatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loved?: IntFieldUpdateOperationsInput | number
    followed?: IntFieldUpdateOperationsInput | number
    seriesWatchTime?: IntFieldUpdateOperationsInput | number
    seriesWatched?: IntFieldUpdateOperationsInput | number
    moviesWatchTime?: IntFieldUpdateOperationsInput | number
    moviesWatched?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencesUpsertWithoutUserInput = {
    update: XOR<PreferencesUpdateWithoutUserInput, PreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    where?: PreferencesWhereInput
  }

  export type PreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: PreferencesWhereInput
    data: XOR<PreferencesUpdateWithoutUserInput, PreferencesUncheckedUpdateWithoutUserInput>
  }

  export type PreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gridView?: BoolFieldUpdateOperationsInput | boolean
    toWatch?: BoolFieldUpdateOperationsInput | boolean
    defaultPage?: EnumDefaultPageFieldUpdateOperationsInput | $Enums.DefaultPage
  }

  export type PreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gridView?: BoolFieldUpdateOperationsInput | boolean
    toWatch?: BoolFieldUpdateOperationsInput | boolean
    defaultPage?: EnumDefaultPageFieldUpdateOperationsInput | $Enums.DefaultPage
  }

  export type EpisodeUpsertWithWhereUniqueWithoutUserInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutUserInput, EpisodeUncheckedUpdateWithoutUserInput>
    create: XOR<EpisodeCreateWithoutUserInput, EpisodeUncheckedCreateWithoutUserInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutUserInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutUserInput, EpisodeUncheckedUpdateWithoutUserInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutUserInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutUserInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: IntFilter<"Episode"> | number
    tmdbId?: IntFilter<"Episode"> | number
    number?: IntFilter<"Episode"> | number
    seasonId?: IntFilter<"Episode"> | number
    name?: StringFilter<"Episode"> | string
    cover?: StringNullableFilter<"Episode"> | string | null
    duration?: IntNullableFilter<"Episode"> | number | null
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
  }

  export type ShowUpsertWithWhereUniqueWithoutUserInput = {
    where: ShowWhereUniqueInput
    update: XOR<ShowUpdateWithoutUserInput, ShowUncheckedUpdateWithoutUserInput>
    create: XOR<ShowCreateWithoutUserInput, ShowUncheckedCreateWithoutUserInput>
  }

  export type ShowUpdateWithWhereUniqueWithoutUserInput = {
    where: ShowWhereUniqueInput
    data: XOR<ShowUpdateWithoutUserInput, ShowUncheckedUpdateWithoutUserInput>
  }

  export type ShowUpdateManyWithWhereWithoutUserInput = {
    where: ShowScalarWhereInput
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyWithoutUserInput>
  }

  export type ShowScalarWhereInput = {
    AND?: ShowScalarWhereInput | ShowScalarWhereInput[]
    OR?: ShowScalarWhereInput[]
    NOT?: ShowScalarWhereInput | ShowScalarWhereInput[]
    id?: IntFilter<"Show"> | number
    tmdbId?: IntFilter<"Show"> | number
    type?: EnumShow_TypeFilter<"Show"> | $Enums.Show_Type
    adult?: BoolFilter<"Show"> | boolean
    popularity?: FloatFilter<"Show"> | number
    name?: StringFilter<"Show"> | string
    listId?: StringNullableFilter<"Show"> | string | null
    updatedAt?: DateTimeFilter<"Show"> | Date | string
  }

  export type ShowUpsertWithWhereUniqueWithoutLovedByInput = {
    where: ShowWhereUniqueInput
    update: XOR<ShowUpdateWithoutLovedByInput, ShowUncheckedUpdateWithoutLovedByInput>
    create: XOR<ShowCreateWithoutLovedByInput, ShowUncheckedCreateWithoutLovedByInput>
  }

  export type ShowUpdateWithWhereUniqueWithoutLovedByInput = {
    where: ShowWhereUniqueInput
    data: XOR<ShowUpdateWithoutLovedByInput, ShowUncheckedUpdateWithoutLovedByInput>
  }

  export type ShowUpdateManyWithWhereWithoutLovedByInput = {
    where: ShowScalarWhereInput
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyWithoutLovedByInput>
  }

  export type UserCreateWithoutStatsInput = {
    id?: string
    username: string
    profilePicture: string
    list?: ListCreateNestedManyWithoutUserInput
    preferences: PreferencesCreateNestedOneWithoutUserInput
    watchedEpisodes?: EpisodeCreateNestedManyWithoutUserInput
    followedShows?: ShowCreateNestedManyWithoutUserInput
    lovedShows?: ShowCreateNestedManyWithoutLovedByInput
  }

  export type UserUncheckedCreateWithoutStatsInput = {
    id?: string
    username: string
    profilePicture: string
    preferencesId: string
    list?: ListUncheckedCreateNestedManyWithoutUserInput
    watchedEpisodes?: EpisodeUncheckedCreateNestedManyWithoutUserInput
    followedShows?: ShowUncheckedCreateNestedManyWithoutUserInput
    lovedShows?: ShowUncheckedCreateNestedManyWithoutLovedByInput
  }

  export type UserCreateOrConnectWithoutStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
  }

  export type UserUpsertWithoutStatsInput = {
    update: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    list?: ListUpdateManyWithoutUserNestedInput
    preferences?: PreferencesUpdateOneRequiredWithoutUserNestedInput
    watchedEpisodes?: EpisodeUpdateManyWithoutUserNestedInput
    followedShows?: ShowUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUpdateManyWithoutLovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
    list?: ListUncheckedUpdateManyWithoutUserNestedInput
    watchedEpisodes?: EpisodeUncheckedUpdateManyWithoutUserNestedInput
    followedShows?: ShowUncheckedUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUncheckedUpdateManyWithoutLovedByNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    username: string
    profilePicture: string
    list?: ListCreateNestedManyWithoutUserInput
    stats: StatsCreateNestedOneWithoutUserInput
    watchedEpisodes?: EpisodeCreateNestedManyWithoutUserInput
    followedShows?: ShowCreateNestedManyWithoutUserInput
    lovedShows?: ShowCreateNestedManyWithoutLovedByInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    username: string
    profilePicture: string
    statsId: string
    list?: ListUncheckedCreateNestedManyWithoutUserInput
    watchedEpisodes?: EpisodeUncheckedCreateNestedManyWithoutUserInput
    followedShows?: ShowUncheckedCreateNestedManyWithoutUserInput
    lovedShows?: ShowUncheckedCreateNestedManyWithoutLovedByInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    list?: ListUpdateManyWithoutUserNestedInput
    stats?: StatsUpdateOneRequiredWithoutUserNestedInput
    watchedEpisodes?: EpisodeUpdateManyWithoutUserNestedInput
    followedShows?: ShowUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUpdateManyWithoutLovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    list?: ListUncheckedUpdateManyWithoutUserNestedInput
    watchedEpisodes?: EpisodeUncheckedUpdateManyWithoutUserNestedInput
    followedShows?: ShowUncheckedUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUncheckedUpdateManyWithoutLovedByNestedInput
  }

  export type UserCreateWithoutListInput = {
    id?: string
    username: string
    profilePicture: string
    stats: StatsCreateNestedOneWithoutUserInput
    preferences: PreferencesCreateNestedOneWithoutUserInput
    watchedEpisodes?: EpisodeCreateNestedManyWithoutUserInput
    followedShows?: ShowCreateNestedManyWithoutUserInput
    lovedShows?: ShowCreateNestedManyWithoutLovedByInput
  }

  export type UserUncheckedCreateWithoutListInput = {
    id?: string
    username: string
    profilePicture: string
    statsId: string
    preferencesId: string
    watchedEpisodes?: EpisodeUncheckedCreateNestedManyWithoutUserInput
    followedShows?: ShowUncheckedCreateNestedManyWithoutUserInput
    lovedShows?: ShowUncheckedCreateNestedManyWithoutLovedByInput
  }

  export type UserCreateOrConnectWithoutListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListInput, UserUncheckedCreateWithoutListInput>
  }

  export type ShowCreateWithoutListInput = {
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    updatedAt?: Date | string
    seasons?: SeasonCreateNestedManyWithoutShowInput
    user?: UserCreateNestedManyWithoutFollowedShowsInput
    lovedBy?: UserCreateNestedManyWithoutLovedShowsInput
    images?: TMDBImageCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutListInput = {
    id?: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    updatedAt?: Date | string
    seasons?: SeasonUncheckedCreateNestedManyWithoutShowInput
    user?: UserUncheckedCreateNestedManyWithoutFollowedShowsInput
    lovedBy?: UserUncheckedCreateNestedManyWithoutLovedShowsInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutListInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutListInput, ShowUncheckedCreateWithoutListInput>
  }

  export type ShowCreateManyListInputEnvelope = {
    data: ShowCreateManyListInput | ShowCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListInput = {
    update: XOR<UserUpdateWithoutListInput, UserUncheckedUpdateWithoutListInput>
    create: XOR<UserCreateWithoutListInput, UserUncheckedCreateWithoutListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListInput, UserUncheckedUpdateWithoutListInput>
  }

  export type UserUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    stats?: StatsUpdateOneRequiredWithoutUserNestedInput
    preferences?: PreferencesUpdateOneRequiredWithoutUserNestedInput
    watchedEpisodes?: EpisodeUpdateManyWithoutUserNestedInput
    followedShows?: ShowUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUpdateManyWithoutLovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
    watchedEpisodes?: EpisodeUncheckedUpdateManyWithoutUserNestedInput
    followedShows?: ShowUncheckedUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUncheckedUpdateManyWithoutLovedByNestedInput
  }

  export type ShowUpsertWithWhereUniqueWithoutListInput = {
    where: ShowWhereUniqueInput
    update: XOR<ShowUpdateWithoutListInput, ShowUncheckedUpdateWithoutListInput>
    create: XOR<ShowCreateWithoutListInput, ShowUncheckedCreateWithoutListInput>
  }

  export type ShowUpdateWithWhereUniqueWithoutListInput = {
    where: ShowWhereUniqueInput
    data: XOR<ShowUpdateWithoutListInput, ShowUncheckedUpdateWithoutListInput>
  }

  export type ShowUpdateManyWithWhereWithoutListInput = {
    where: ShowScalarWhereInput
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyWithoutListInput>
  }

  export type SeasonCreateWithoutShowInput = {
    tmdbId: number
    number: number
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutSeasonInput
    images?: TMDBImageCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateWithoutShowInput = {
    id?: number
    tmdbId: number
    number: number
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeasonInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonCreateOrConnectWithoutShowInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput>
  }

  export type SeasonCreateManyShowInputEnvelope = {
    data: SeasonCreateManyShowInput | SeasonCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type ListCreateWithoutShowsInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutListInput
  }

  export type ListUncheckedCreateWithoutShowsInput = {
    id?: string
    name: string
    userId: string
  }

  export type ListCreateOrConnectWithoutShowsInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutShowsInput, ListUncheckedCreateWithoutShowsInput>
  }

  export type UserCreateWithoutFollowedShowsInput = {
    id?: string
    username: string
    profilePicture: string
    list?: ListCreateNestedManyWithoutUserInput
    stats: StatsCreateNestedOneWithoutUserInput
    preferences: PreferencesCreateNestedOneWithoutUserInput
    watchedEpisodes?: EpisodeCreateNestedManyWithoutUserInput
    lovedShows?: ShowCreateNestedManyWithoutLovedByInput
  }

  export type UserUncheckedCreateWithoutFollowedShowsInput = {
    id?: string
    username: string
    profilePicture: string
    statsId: string
    preferencesId: string
    list?: ListUncheckedCreateNestedManyWithoutUserInput
    watchedEpisodes?: EpisodeUncheckedCreateNestedManyWithoutUserInput
    lovedShows?: ShowUncheckedCreateNestedManyWithoutLovedByInput
  }

  export type UserCreateOrConnectWithoutFollowedShowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedShowsInput, UserUncheckedCreateWithoutFollowedShowsInput>
  }

  export type UserCreateWithoutLovedShowsInput = {
    id?: string
    username: string
    profilePicture: string
    list?: ListCreateNestedManyWithoutUserInput
    stats: StatsCreateNestedOneWithoutUserInput
    preferences: PreferencesCreateNestedOneWithoutUserInput
    watchedEpisodes?: EpisodeCreateNestedManyWithoutUserInput
    followedShows?: ShowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLovedShowsInput = {
    id?: string
    username: string
    profilePicture: string
    statsId: string
    preferencesId: string
    list?: ListUncheckedCreateNestedManyWithoutUserInput
    watchedEpisodes?: EpisodeUncheckedCreateNestedManyWithoutUserInput
    followedShows?: ShowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLovedShowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLovedShowsInput, UserUncheckedCreateWithoutLovedShowsInput>
  }

  export type TMDBImageCreateWithoutShowInput = {
    url: string
    type: $Enums.Image_Type
    season?: SeasonCreateNestedOneWithoutImagesInput
    episode?: EpisodeCreateNestedOneWithoutImagesInput
  }

  export type TMDBImageUncheckedCreateWithoutShowInput = {
    id?: number
    url: string
    type: $Enums.Image_Type
    seasonId?: number | null
    episodeId?: number | null
  }

  export type TMDBImageCreateOrConnectWithoutShowInput = {
    where: TMDBImageWhereUniqueInput
    create: XOR<TMDBImageCreateWithoutShowInput, TMDBImageUncheckedCreateWithoutShowInput>
  }

  export type TMDBImageCreateManyShowInputEnvelope = {
    data: TMDBImageCreateManyShowInput | TMDBImageCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type SeasonUpsertWithWhereUniqueWithoutShowInput = {
    where: SeasonWhereUniqueInput
    update: XOR<SeasonUpdateWithoutShowInput, SeasonUncheckedUpdateWithoutShowInput>
    create: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput>
  }

  export type SeasonUpdateWithWhereUniqueWithoutShowInput = {
    where: SeasonWhereUniqueInput
    data: XOR<SeasonUpdateWithoutShowInput, SeasonUncheckedUpdateWithoutShowInput>
  }

  export type SeasonUpdateManyWithWhereWithoutShowInput = {
    where: SeasonScalarWhereInput
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyWithoutShowInput>
  }

  export type SeasonScalarWhereInput = {
    AND?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
    OR?: SeasonScalarWhereInput[]
    NOT?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
    id?: IntFilter<"Season"> | number
    tmdbId?: IntFilter<"Season"> | number
    number?: IntFilter<"Season"> | number
    showId?: IntFilter<"Season"> | number
    updatedAt?: DateTimeFilter<"Season"> | Date | string
  }

  export type ListUpsertWithoutShowsInput = {
    update: XOR<ListUpdateWithoutShowsInput, ListUncheckedUpdateWithoutShowsInput>
    create: XOR<ListCreateWithoutShowsInput, ListUncheckedCreateWithoutShowsInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutShowsInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutShowsInput, ListUncheckedUpdateWithoutShowsInput>
  }

  export type ListUpdateWithoutShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithWhereUniqueWithoutFollowedShowsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowedShowsInput, UserUncheckedUpdateWithoutFollowedShowsInput>
    create: XOR<UserCreateWithoutFollowedShowsInput, UserUncheckedCreateWithoutFollowedShowsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowedShowsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowedShowsInput, UserUncheckedUpdateWithoutFollowedShowsInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowedShowsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowedShowsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    profilePicture?: StringFilter<"User"> | string
    statsId?: StringFilter<"User"> | string
    preferencesId?: StringFilter<"User"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutLovedShowsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLovedShowsInput, UserUncheckedUpdateWithoutLovedShowsInput>
    create: XOR<UserCreateWithoutLovedShowsInput, UserUncheckedCreateWithoutLovedShowsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLovedShowsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLovedShowsInput, UserUncheckedUpdateWithoutLovedShowsInput>
  }

  export type UserUpdateManyWithWhereWithoutLovedShowsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLovedShowsInput>
  }

  export type TMDBImageUpsertWithWhereUniqueWithoutShowInput = {
    where: TMDBImageWhereUniqueInput
    update: XOR<TMDBImageUpdateWithoutShowInput, TMDBImageUncheckedUpdateWithoutShowInput>
    create: XOR<TMDBImageCreateWithoutShowInput, TMDBImageUncheckedCreateWithoutShowInput>
  }

  export type TMDBImageUpdateWithWhereUniqueWithoutShowInput = {
    where: TMDBImageWhereUniqueInput
    data: XOR<TMDBImageUpdateWithoutShowInput, TMDBImageUncheckedUpdateWithoutShowInput>
  }

  export type TMDBImageUpdateManyWithWhereWithoutShowInput = {
    where: TMDBImageScalarWhereInput
    data: XOR<TMDBImageUpdateManyMutationInput, TMDBImageUncheckedUpdateManyWithoutShowInput>
  }

  export type TMDBImageScalarWhereInput = {
    AND?: TMDBImageScalarWhereInput | TMDBImageScalarWhereInput[]
    OR?: TMDBImageScalarWhereInput[]
    NOT?: TMDBImageScalarWhereInput | TMDBImageScalarWhereInput[]
    id?: IntFilter<"TMDBImage"> | number
    url?: StringFilter<"TMDBImage"> | string
    type?: EnumImage_TypeFilter<"TMDBImage"> | $Enums.Image_Type
    showId?: IntNullableFilter<"TMDBImage"> | number | null
    seasonId?: IntNullableFilter<"TMDBImage"> | number | null
    episodeId?: IntNullableFilter<"TMDBImage"> | number | null
  }

  export type ShowCreateWithoutImagesInput = {
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    updatedAt?: Date | string
    seasons?: SeasonCreateNestedManyWithoutShowInput
    list?: ListCreateNestedOneWithoutShowsInput
    user?: UserCreateNestedManyWithoutFollowedShowsInput
    lovedBy?: UserCreateNestedManyWithoutLovedShowsInput
  }

  export type ShowUncheckedCreateWithoutImagesInput = {
    id?: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    listId?: string | null
    updatedAt?: Date | string
    seasons?: SeasonUncheckedCreateNestedManyWithoutShowInput
    user?: UserUncheckedCreateNestedManyWithoutFollowedShowsInput
    lovedBy?: UserUncheckedCreateNestedManyWithoutLovedShowsInput
  }

  export type ShowCreateOrConnectWithoutImagesInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutImagesInput, ShowUncheckedCreateWithoutImagesInput>
  }

  export type SeasonCreateWithoutImagesInput = {
    tmdbId: number
    number: number
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutSeasonInput
    show: ShowCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonUncheckedCreateWithoutImagesInput = {
    id?: number
    tmdbId: number
    number: number
    showId: number
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonCreateOrConnectWithoutImagesInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutImagesInput, SeasonUncheckedCreateWithoutImagesInput>
  }

  export type EpisodeCreateWithoutImagesInput = {
    tmdbId: number
    number: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
    season: SeasonCreateNestedOneWithoutEpisodesInput
    User?: UserCreateNestedManyWithoutWatchedEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutImagesInput = {
    id?: number
    tmdbId: number
    number: number
    seasonId: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutWatchedEpisodesInput
  }

  export type EpisodeCreateOrConnectWithoutImagesInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutImagesInput, EpisodeUncheckedCreateWithoutImagesInput>
  }

  export type ShowUpsertWithoutImagesInput = {
    update: XOR<ShowUpdateWithoutImagesInput, ShowUncheckedUpdateWithoutImagesInput>
    create: XOR<ShowCreateWithoutImagesInput, ShowUncheckedCreateWithoutImagesInput>
    where?: ShowWhereInput
  }

  export type ShowUpdateToOneWithWhereWithoutImagesInput = {
    where?: ShowWhereInput
    data: XOR<ShowUpdateWithoutImagesInput, ShowUncheckedUpdateWithoutImagesInput>
  }

  export type ShowUpdateWithoutImagesInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUpdateManyWithoutShowNestedInput
    list?: ListUpdateOneWithoutShowsNestedInput
    user?: UserUpdateManyWithoutFollowedShowsNestedInput
    lovedBy?: UserUpdateManyWithoutLovedShowsNestedInput
  }

  export type ShowUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUncheckedUpdateManyWithoutShowNestedInput
    user?: UserUncheckedUpdateManyWithoutFollowedShowsNestedInput
    lovedBy?: UserUncheckedUpdateManyWithoutLovedShowsNestedInput
  }

  export type SeasonUpsertWithoutImagesInput = {
    update: XOR<SeasonUpdateWithoutImagesInput, SeasonUncheckedUpdateWithoutImagesInput>
    create: XOR<SeasonCreateWithoutImagesInput, SeasonUncheckedCreateWithoutImagesInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutImagesInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutImagesInput, SeasonUncheckedUpdateWithoutImagesInput>
  }

  export type SeasonUpdateWithoutImagesInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutSeasonNestedInput
    show?: ShowUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type EpisodeUpsertWithoutImagesInput = {
    update: XOR<EpisodeUpdateWithoutImagesInput, EpisodeUncheckedUpdateWithoutImagesInput>
    create: XOR<EpisodeCreateWithoutImagesInput, EpisodeUncheckedCreateWithoutImagesInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutImagesInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutImagesInput, EpisodeUncheckedUpdateWithoutImagesInput>
  }

  export type EpisodeUpdateWithoutImagesInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: SeasonUpdateOneRequiredWithoutEpisodesNestedInput
    User?: UserUpdateManyWithoutWatchedEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutWatchedEpisodesNestedInput
  }

  export type EpisodeCreateWithoutSeasonInput = {
    tmdbId: number
    number: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutWatchedEpisodesInput
    images?: TMDBImageCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutSeasonInput = {
    id?: number
    tmdbId: number
    number: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutWatchedEpisodesInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput>
  }

  export type EpisodeCreateManySeasonInputEnvelope = {
    data: EpisodeCreateManySeasonInput | EpisodeCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type TMDBImageCreateWithoutSeasonInput = {
    url: string
    type: $Enums.Image_Type
    show?: ShowCreateNestedOneWithoutImagesInput
    episode?: EpisodeCreateNestedOneWithoutImagesInput
  }

  export type TMDBImageUncheckedCreateWithoutSeasonInput = {
    id?: number
    url: string
    type: $Enums.Image_Type
    showId?: number | null
    episodeId?: number | null
  }

  export type TMDBImageCreateOrConnectWithoutSeasonInput = {
    where: TMDBImageWhereUniqueInput
    create: XOR<TMDBImageCreateWithoutSeasonInput, TMDBImageUncheckedCreateWithoutSeasonInput>
  }

  export type TMDBImageCreateManySeasonInputEnvelope = {
    data: TMDBImageCreateManySeasonInput | TMDBImageCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type ShowCreateWithoutSeasonsInput = {
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    updatedAt?: Date | string
    list?: ListCreateNestedOneWithoutShowsInput
    user?: UserCreateNestedManyWithoutFollowedShowsInput
    lovedBy?: UserCreateNestedManyWithoutLovedShowsInput
    images?: TMDBImageCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutSeasonsInput = {
    id?: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    listId?: string | null
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutFollowedShowsInput
    lovedBy?: UserUncheckedCreateNestedManyWithoutLovedShowsInput
    images?: TMDBImageUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutSeasonsInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutSeasonsInput, ShowUncheckedCreateWithoutSeasonsInput>
  }

  export type EpisodeUpsertWithWhereUniqueWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutSeasonInput, EpisodeUncheckedUpdateWithoutSeasonInput>
    create: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutSeasonInput, EpisodeUncheckedUpdateWithoutSeasonInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutSeasonInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutSeasonInput>
  }

  export type TMDBImageUpsertWithWhereUniqueWithoutSeasonInput = {
    where: TMDBImageWhereUniqueInput
    update: XOR<TMDBImageUpdateWithoutSeasonInput, TMDBImageUncheckedUpdateWithoutSeasonInput>
    create: XOR<TMDBImageCreateWithoutSeasonInput, TMDBImageUncheckedCreateWithoutSeasonInput>
  }

  export type TMDBImageUpdateWithWhereUniqueWithoutSeasonInput = {
    where: TMDBImageWhereUniqueInput
    data: XOR<TMDBImageUpdateWithoutSeasonInput, TMDBImageUncheckedUpdateWithoutSeasonInput>
  }

  export type TMDBImageUpdateManyWithWhereWithoutSeasonInput = {
    where: TMDBImageScalarWhereInput
    data: XOR<TMDBImageUpdateManyMutationInput, TMDBImageUncheckedUpdateManyWithoutSeasonInput>
  }

  export type ShowUpsertWithoutSeasonsInput = {
    update: XOR<ShowUpdateWithoutSeasonsInput, ShowUncheckedUpdateWithoutSeasonsInput>
    create: XOR<ShowCreateWithoutSeasonsInput, ShowUncheckedCreateWithoutSeasonsInput>
    where?: ShowWhereInput
  }

  export type ShowUpdateToOneWithWhereWithoutSeasonsInput = {
    where?: ShowWhereInput
    data: XOR<ShowUpdateWithoutSeasonsInput, ShowUncheckedUpdateWithoutSeasonsInput>
  }

  export type ShowUpdateWithoutSeasonsInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneWithoutShowsNestedInput
    user?: UserUpdateManyWithoutFollowedShowsNestedInput
    lovedBy?: UserUpdateManyWithoutLovedShowsNestedInput
    images?: TMDBImageUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutSeasonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutFollowedShowsNestedInput
    lovedBy?: UserUncheckedUpdateManyWithoutLovedShowsNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutShowNestedInput
  }

  export type SeasonCreateWithoutEpisodesInput = {
    tmdbId: number
    number: number
    updatedAt?: Date | string
    images?: TMDBImageCreateNestedManyWithoutSeasonInput
    show: ShowCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonUncheckedCreateWithoutEpisodesInput = {
    id?: number
    tmdbId: number
    number: number
    showId: number
    updatedAt?: Date | string
    images?: TMDBImageUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonCreateOrConnectWithoutEpisodesInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
  }

  export type UserCreateWithoutWatchedEpisodesInput = {
    id?: string
    username: string
    profilePicture: string
    list?: ListCreateNestedManyWithoutUserInput
    stats: StatsCreateNestedOneWithoutUserInput
    preferences: PreferencesCreateNestedOneWithoutUserInput
    followedShows?: ShowCreateNestedManyWithoutUserInput
    lovedShows?: ShowCreateNestedManyWithoutLovedByInput
  }

  export type UserUncheckedCreateWithoutWatchedEpisodesInput = {
    id?: string
    username: string
    profilePicture: string
    statsId: string
    preferencesId: string
    list?: ListUncheckedCreateNestedManyWithoutUserInput
    followedShows?: ShowUncheckedCreateNestedManyWithoutUserInput
    lovedShows?: ShowUncheckedCreateNestedManyWithoutLovedByInput
  }

  export type UserCreateOrConnectWithoutWatchedEpisodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchedEpisodesInput, UserUncheckedCreateWithoutWatchedEpisodesInput>
  }

  export type TMDBImageCreateWithoutEpisodeInput = {
    url: string
    type: $Enums.Image_Type
    show?: ShowCreateNestedOneWithoutImagesInput
    season?: SeasonCreateNestedOneWithoutImagesInput
  }

  export type TMDBImageUncheckedCreateWithoutEpisodeInput = {
    id?: number
    url: string
    type: $Enums.Image_Type
    showId?: number | null
    seasonId?: number | null
  }

  export type TMDBImageCreateOrConnectWithoutEpisodeInput = {
    where: TMDBImageWhereUniqueInput
    create: XOR<TMDBImageCreateWithoutEpisodeInput, TMDBImageUncheckedCreateWithoutEpisodeInput>
  }

  export type TMDBImageCreateManyEpisodeInputEnvelope = {
    data: TMDBImageCreateManyEpisodeInput | TMDBImageCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type SeasonUpsertWithoutEpisodesInput = {
    update: XOR<SeasonUpdateWithoutEpisodesInput, SeasonUncheckedUpdateWithoutEpisodesInput>
    create: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutEpisodesInput, SeasonUncheckedUpdateWithoutEpisodesInput>
  }

  export type SeasonUpdateWithoutEpisodesInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TMDBImageUpdateManyWithoutSeasonNestedInput
    show?: ShowUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TMDBImageUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutWatchedEpisodesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWatchedEpisodesInput, UserUncheckedUpdateWithoutWatchedEpisodesInput>
    create: XOR<UserCreateWithoutWatchedEpisodesInput, UserUncheckedCreateWithoutWatchedEpisodesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWatchedEpisodesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWatchedEpisodesInput, UserUncheckedUpdateWithoutWatchedEpisodesInput>
  }

  export type UserUpdateManyWithWhereWithoutWatchedEpisodesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutWatchedEpisodesInput>
  }

  export type TMDBImageUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: TMDBImageWhereUniqueInput
    update: XOR<TMDBImageUpdateWithoutEpisodeInput, TMDBImageUncheckedUpdateWithoutEpisodeInput>
    create: XOR<TMDBImageCreateWithoutEpisodeInput, TMDBImageUncheckedCreateWithoutEpisodeInput>
  }

  export type TMDBImageUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: TMDBImageWhereUniqueInput
    data: XOR<TMDBImageUpdateWithoutEpisodeInput, TMDBImageUncheckedUpdateWithoutEpisodeInput>
  }

  export type TMDBImageUpdateManyWithWhereWithoutEpisodeInput = {
    where: TMDBImageScalarWhereInput
    data: XOR<TMDBImageUpdateManyMutationInput, TMDBImageUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type ListCreateManyUserInput = {
    id?: string
    name: string
  }

  export type ListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Shows?: ShowUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Shows?: ShowUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodeUpdateWithoutUserInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: SeasonUpdateOneRequiredWithoutEpisodesNestedInput
    images?: TMDBImageUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TMDBImageUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowUpdateWithoutUserInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUpdateManyWithoutShowNestedInput
    list?: ListUpdateOneWithoutShowsNestedInput
    lovedBy?: UserUpdateManyWithoutLovedShowsNestedInput
    images?: TMDBImageUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUncheckedUpdateManyWithoutShowNestedInput
    lovedBy?: UserUncheckedUpdateManyWithoutLovedShowsNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowUpdateWithoutLovedByInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUpdateManyWithoutShowNestedInput
    list?: ListUpdateOneWithoutShowsNestedInput
    user?: UserUpdateManyWithoutFollowedShowsNestedInput
    images?: TMDBImageUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutLovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUncheckedUpdateManyWithoutShowNestedInput
    user?: UserUncheckedUpdateManyWithoutFollowedShowsNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateManyWithoutLovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCreateManyListInput = {
    id?: number
    tmdbId: number
    type: $Enums.Show_Type
    adult: boolean
    popularity: number
    name: string
    updatedAt?: Date | string
  }

  export type ShowUpdateWithoutListInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUpdateManyWithoutShowNestedInput
    user?: UserUpdateManyWithoutFollowedShowsNestedInput
    lovedBy?: UserUpdateManyWithoutLovedShowsNestedInput
    images?: TMDBImageUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonUncheckedUpdateManyWithoutShowNestedInput
    user?: UserUncheckedUpdateManyWithoutFollowedShowsNestedInput
    lovedBy?: UserUncheckedUpdateManyWithoutLovedShowsNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    type?: EnumShow_TypeFieldUpdateOperationsInput | $Enums.Show_Type
    adult?: BoolFieldUpdateOperationsInput | boolean
    popularity?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonCreateManyShowInput = {
    id?: number
    tmdbId: number
    number: number
    updatedAt?: Date | string
  }

  export type TMDBImageCreateManyShowInput = {
    id?: number
    url: string
    type: $Enums.Image_Type
    seasonId?: number | null
    episodeId?: number | null
  }

  export type SeasonUpdateWithoutShowInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutSeasonNestedInput
    images?: TMDBImageUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutSeasonNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFollowedShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    list?: ListUpdateManyWithoutUserNestedInput
    stats?: StatsUpdateOneRequiredWithoutUserNestedInput
    preferences?: PreferencesUpdateOneRequiredWithoutUserNestedInput
    watchedEpisodes?: EpisodeUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUpdateManyWithoutLovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowedShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
    list?: ListUncheckedUpdateManyWithoutUserNestedInput
    watchedEpisodes?: EpisodeUncheckedUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUncheckedUpdateManyWithoutLovedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowedShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutLovedShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    list?: ListUpdateManyWithoutUserNestedInput
    stats?: StatsUpdateOneRequiredWithoutUserNestedInput
    preferences?: PreferencesUpdateOneRequiredWithoutUserNestedInput
    watchedEpisodes?: EpisodeUpdateManyWithoutUserNestedInput
    followedShows?: ShowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLovedShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
    list?: ListUncheckedUpdateManyWithoutUserNestedInput
    watchedEpisodes?: EpisodeUncheckedUpdateManyWithoutUserNestedInput
    followedShows?: ShowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLovedShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
  }

  export type TMDBImageUpdateWithoutShowInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    season?: SeasonUpdateOneWithoutImagesNestedInput
    episode?: EpisodeUpdateOneWithoutImagesNestedInput
  }

  export type TMDBImageUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TMDBImageUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeCreateManySeasonInput = {
    id?: number
    tmdbId: number
    number: number
    name: string
    cover?: string | null
    duration?: number | null
    updatedAt?: Date | string
  }

  export type TMDBImageCreateManySeasonInput = {
    id?: number
    url: string
    type: $Enums.Image_Type
    showId?: number | null
    episodeId?: number | null
  }

  export type EpisodeUpdateWithoutSeasonInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutWatchedEpisodesNestedInput
    images?: TMDBImageUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutWatchedEpisodesNestedInput
    images?: TMDBImageUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TMDBImageUpdateWithoutSeasonInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    show?: ShowUpdateOneWithoutImagesNestedInput
    episode?: EpisodeUpdateOneWithoutImagesNestedInput
  }

  export type TMDBImageUncheckedUpdateWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    showId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TMDBImageUncheckedUpdateManyWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    showId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TMDBImageCreateManyEpisodeInput = {
    id?: number
    url: string
    type: $Enums.Image_Type
    showId?: number | null
    seasonId?: number | null
  }

  export type UserUpdateWithoutWatchedEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    list?: ListUpdateManyWithoutUserNestedInput
    stats?: StatsUpdateOneRequiredWithoutUserNestedInput
    preferences?: PreferencesUpdateOneRequiredWithoutUserNestedInput
    followedShows?: ShowUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUpdateManyWithoutLovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchedEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
    list?: ListUncheckedUpdateManyWithoutUserNestedInput
    followedShows?: ShowUncheckedUpdateManyWithoutUserNestedInput
    lovedShows?: ShowUncheckedUpdateManyWithoutLovedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutWatchedEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    statsId?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
  }

  export type TMDBImageUpdateWithoutEpisodeInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    show?: ShowUpdateOneWithoutImagesNestedInput
    season?: SeasonUpdateOneWithoutImagesNestedInput
  }

  export type TMDBImageUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    showId?: NullableIntFieldUpdateOperationsInput | number | null
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TMDBImageUncheckedUpdateManyWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumImage_TypeFieldUpdateOperationsInput | $Enums.Image_Type
    showId?: NullableIntFieldUpdateOperationsInput | number | null
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}