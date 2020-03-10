import React from 'react'
import Scroll from '../../../lib/scroll/scroll'

const ScrollExample: React.FunctionComponent = () => {
  return (
    <div>
      <div>第一个例子</div>

      <Scroll style={{ height: 400, border: '1px solid red', margin: '40px'}}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
      </Scroll>
    </div>
  )
}

export default ScrollExample