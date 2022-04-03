// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { InboundUnion, unionToInboundUnion, unionListToInboundUnion } from './inbound-union';
import { DataFeed, DataFeedT } from './slimevr-protocol/data-feed/data-feed';
import { DataFeedNotify, DataFeedNotifyT } from './slimevr-protocol/data-feed/data-feed-notify';
import { DataFeedRequest, DataFeedRequestT } from './slimevr-protocol/data-feed/data-feed-request';
import { DeviceStatus, DeviceStatusT } from './slimevr-protocol/data-feed/device-status';
import { PollDeviceStatus, PollDeviceStatusT } from './slimevr-protocol/data-feed/poll-device-status';
import { AssignTrackerRequest, AssignTrackerRequestT } from './slimevr-protocol/rpc/assign-tracker-request';
import { ChangeSettingsRequest, ChangeSettingsRequestT } from './slimevr-protocol/rpc/change-settings-request';
import { HeartbeatRequest, HeartbeatRequestT } from './slimevr-protocol/rpc/heartbeat-request';
import { ResetRequest, ResetRequestT } from './slimevr-protocol/rpc/reset-request';
import { SettingsRequest, SettingsRequestT } from './slimevr-protocol/rpc/settings-request';


export class InboundPacket {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):InboundPacket {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsInboundPacket(bb:flatbuffers.ByteBuffer, obj?:InboundPacket):InboundPacket {
  return (obj || new InboundPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsInboundPacket(bb:flatbuffers.ByteBuffer, obj?:InboundPacket):InboundPacket {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new InboundPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

acknowledgeMe():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

packetType():InboundUnion {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : InboundUnion.NONE;
}

packet<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startInboundPacket(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addAcknowledgeMe(builder:flatbuffers.Builder, acknowledgeMe:boolean) {
  builder.addFieldInt8(0, +acknowledgeMe, +false);
}

static addPacketType(builder:flatbuffers.Builder, packetType:InboundUnion) {
  builder.addFieldInt8(1, packetType, InboundUnion.NONE);
}

static addPacket(builder:flatbuffers.Builder, packetOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, packetOffset, 0);
}

static endInboundPacket(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createInboundPacket(builder:flatbuffers.Builder, acknowledgeMe:boolean, packetType:InboundUnion, packetOffset:flatbuffers.Offset):flatbuffers.Offset {
  InboundPacket.startInboundPacket(builder);
  InboundPacket.addAcknowledgeMe(builder, acknowledgeMe);
  InboundPacket.addPacketType(builder, packetType);
  InboundPacket.addPacket(builder, packetOffset);
  return InboundPacket.endInboundPacket(builder);
}

unpack(): InboundPacketT {
  return new InboundPacketT(
    this.acknowledgeMe(),
    this.packetType(),
    (() => {
      let temp = unionToInboundUnion(this.packetType(), this.packet.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: InboundPacketT): void {
  _o.acknowledgeMe = this.acknowledgeMe();
  _o.packetType = this.packetType();
  _o.packet = (() => {
      let temp = unionToInboundUnion(this.packetType(), this.packet.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class InboundPacketT {
constructor(
  public acknowledgeMe: boolean = false,
  public packetType: InboundUnion = InboundUnion.NONE,
  public packet: AssignTrackerRequestT|ChangeSettingsRequestT|DataFeedNotifyT|DataFeedRequestT|DataFeedT|DeviceStatusT|HeartbeatRequestT|PollDeviceStatusT|ResetRequestT|SettingsRequestT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const packet = builder.createObjectOffset(this.packet);

  return InboundPacket.createInboundPacket(builder,
    this.acknowledgeMe,
    this.packetType,
    packet
  );
}
}
