import React from 'react'
import { Card, Text } from "@nextui-org/react";

export default function HomeOption(){
  return (
    <div className='container'>
      <Card isHoverable variant="bordered">
        <Card.Body>
          <Text className='text-center'>Home Page Manager</Text>
        </Card.Body>
      </Card>
    </div>
  )
};
