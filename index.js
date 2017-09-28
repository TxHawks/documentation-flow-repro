/* @flow */

///////////////
//  TypeObjects  //
///////////////
/**
 * A type with nothing but a description of the
 * object itself in the docblock
 *
 * **Expected:** Documentation should include object
 * property types.<br />
 * **result:** Documentation includes object property types.
 */
type TypeObjDescriptionOnly = {
  one: string,
  two: number,
}

/**
 * A type with a description of the object itself
 * and of its props, but with no type information in
 * the docblock.
 *
 * **Expected:** Documentation should include object
 * property types and descriptions.<br />
 * **result:** Documentation includes object property
 * types but ignores the descriptions.
 *
 * @property one - The first prop
 * @property two - The second prop
 */
type TypeObjPropsDescriptionNoType = {
  one: string,
  two: number,
}

/**
 * A type with a description of the object itself
 * and of its props, with type information in
 * the docblock
 *
 * **Expected:** Documentation should include object
 * property types and descriptions.<br />
 * **result:** Documentation includes each object property
 * twice. Once only with type information and once with
 * type information and description.
 *
 * @property {string} one - The first prop
 * @property {number} two - The second prop
 */
type TypeObjPropsDescriptionWithType = {
  one: string,
  two: number,
}

/**
 * A type with a description of the object itself in the main docblock
 * and of its props, with prop descriptions inlined inside the type
 *
 * **Expected:** Documentation should include object
 * property types and descriptions.<br />
 * **result:** A separate documentation item is produced for each property.
 */
type TypeObjPropsInlineDescription = {
  /** The first prop of TypeObjPropsInlineDescription */
  one: string,
  /** The second prop of TypeObjPropsInlineDescription */
  two: number,
}

/**
 * An interface with a description of the object itself in the main docblock
 * and of its props, with prop descriptions inlined inside the type
 * explicitly using `@memberof`
 *
 * **Expected:** Documentation should include object
 * property types and descriptions.<br />
 * **result:** A separate documentation item is produced for each property.
 */
interface InterfacePropsInlineDescriptionMemberOf {
  /**
   * @memberof InterfacePropsInlineDescriptionMemberOf
   * The first prop of InterfacePropsInlineDescriptionMemberOf
   */
  first: string;
  /**
   * @memberof InterfacePropsInlineDescriptionMemberOf
   * The second prop of InterfacePropsInlineDescriptionMemberOf
   */
  second: number;
}

/////////////////
//  Functions  //
/////////////////

/**
 * A function with nothing but a description of the
 * function itself in the docblock
 */
function funcDescriptionOnly (one: string, two: string): string {
  return `${one} and ${two}`;
}

/**
 * A function with a description of the function itself
 * and of its params and return value, but with no type
 * information in the docblock
 * @param one - The first argument
 * @param two - The second argument
 *
 * @return The two arguments concatenated with the word `and` between them
 */
function funcParamsDescriptionNoType (one: string, two: string): string {
  return `${one} and ${two}`;
}

/**
 * A function with a description of the function itself
 * and of its params and return value, with type information
 * in the docblock
 *
 * @param {string} one - The first argument
 * @param {string} two - The second argument
 *
 * @return {string} The two arguments concatenated with the word `and` between them
 */
function funcParamsDescriptionWithType (one: string, two: string): string {
  return `${one} and ${two}`;
}
