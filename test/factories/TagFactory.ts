import Cypher from '../../src/utils/Cypher';
import { Factory } from 'rosie';
import faker from 'faker';

export default Factory.define('tag')
  .attr('id', () => faker.random.alphaNumeric(20).toString().toUpperCase())
  .attr('visualID', () => Cypher.hash(faker.random.alphaNumeric(20).toString().toUpperCase()))
  .attr('active', true)
  .attr('issuer', () => true)
  .attr('default', () => false)
  .attr('description', () => 'Tag for unit test');
