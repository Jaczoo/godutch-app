'use strict'
import React, {Component, View, Text, Image, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Styles} from '../../Styles'
var moment = require('moment')

const dateFormat = 'MMM Do YY'

class Fact extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>{this.props.value}</Text>
        </View>
        <View>
          <Icon name={this.props.icon} style={[Styles.toolbarIcon]} />
          <Text>{this.props.label}</Text>
        </View>
      </View>
    )
  }
}

export class DetailScreen extends Component {
  render () {
    var {property} = this.props

    return (
      <View>
        <ScrollView style={{height: 500}}>
          <Text style={Styles.headline}>
            {property.title}
          </Text>
          <Text style={Styles.secondaryText}>
            {moment(this.props.checkin).format(dateFormat)} - {moment(this.props.checkout).add(7, 'days').format(dateFormat)}
          </Text>
          <View>
            <Image
              style={Styles.propertyImage}
              source={{uri: property.image}}
              resizeMode='cover'
            />
          </View>
          <View>
            <Fact label="Sleeps" value={property.sleeps} icon="moon-o" />
            <Fact label="Rated" value={property.rating} icon="star" />
            <Fact label="Bedrooms" value={property.bedrooms} icon="bed" />
          </View>
          <View>
            <Text>{property.price} €</Text>
            <Text>Per Night per person</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

DetailScreen.defaultProps = {
  property: {
    title: 'Cabin with a view',
    sleeps: '6',
    rating: '6.6',
    bedrooms: '6',
    price: '60',
    image: 'http://images.thesurge.com/app/uploads/2015/12/cat-.jpg?6fc78b'
  },
  checkin: new Date(),
  checkout: new Date()
}
