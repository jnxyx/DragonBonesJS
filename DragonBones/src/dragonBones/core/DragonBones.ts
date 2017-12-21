/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2017 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
namespace dragonBones {
    /**
     * @internal
     * @private
     */
    export const enum BinaryOffset {
        WeigthBoneCount = 0,
        WeigthFloatOffset = 1,
        WeigthBoneIndices = 2,

        MeshVertexCount = 0,
        MeshTriangleCount = 1,
        MeshFloatOffset = 2,
        MeshWeightOffset = 3,
        MeshVertexIndices = 4,

        TimelineScale = 0,
        TimelineOffset = 1,
        TimelineKeyFrameCount = 2,
        TimelineFrameValueCount = 3,
        TimelineFrameValueOffset = 4,
        TimelineFrameOffset = 5,

        FramePosition = 0,
        FrameTweenType = 1,
        FrameTweenEasingOrCurveSampleCount = 2,
        FrameCurveSamples = 3,

        DeformMeshOffset = 0,
        DeformCount = 1,
        DeformValueCount = 2,
        DeformValueOffset = 3,
        DeformFloatOffset = 4
    }
    /**
     * @internal
     * @private
     */
    export const enum ArmatureType {
        Armature = 0,
        MovieClip = 1,
        Stage = 2
    }
    /**
     * @internal
     * @private
     */
    export const enum BoneType {
        Bone = 0,
        Surface = 1
    }
    /**
     * @private
     */
    export const enum DisplayType {
        Image = 0,
        Armature = 1,
        Mesh = 2,
        BoundingBox = 3
    }
    /**
     * - Bounding box type.
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - 边界框类型。
     * @version DragonBones 5.0
     * @language zh_CN
     */
    export const enum BoundingBoxType {
        Rectangle = 0,
        Ellipse = 1,
        Polygon = 2
    }
    /**
     * @internal
     * @private
     */
    export const enum ActionType {
        Play = 0,
        Frame = 10,
        Sound = 11
    }
    /**
     * @internal
     * @private
     */
    export const enum BlendMode {
        Normal = 0,
        Add = 1,
        Alpha = 2,
        Darken = 3,
        Difference = 4,
        Erase = 5,
        HardLight = 6,
        Invert = 7,
        Layer = 8,
        Lighten = 9,
        Multiply = 10,
        Overlay = 11,
        Screen = 12,
        Subtract = 13
    }
    /**
     * @internal
     * @private
     */
    export const enum TweenType {
        None = 0,
        Line = 1,
        Curve = 2,
        QuadIn = 3,
        QuadOut = 4,
        QuadInOut = 5
    }
    /**
     * @internal
     * @private
     */
    export const enum TimelineType {
        Action = 0,
        ZOrder = 1,

        BoneAll = 10,
        BoneTranslate = 11,
        BoneRotate = 12,
        BoneScale = 13,

        Surface = 50,

        SlotDisplay = 20,
        SlotColor = 21,
        SlotFFD = 22,

        IKConstraint = 30,

        AnimationTime = 40,
        AnimationWeight = 41
    }
    /**
     * - Offset mode.
     * @version DragonBones 5.5
     * @language en_US
     */
    /**
     * - 偏移模式。
     * @version DragonBones 5.5
     * @language zh_CN
     */
    export const enum OffsetMode {
        None,
        Additive,
        Override
    }
    /**
     * - Animation fade out mode.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画淡出模式。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    export const enum AnimationFadeOutMode {
        /**
         * - Do not fade out of any animation states.
         * @language en_US
         */
        /**
         * - 不淡出任何的动画状态。
         * @language zh_CN
         */
        None = 0,
        /**
         * - Fade out the animation states of the same layer.
         * @language en_US
         */
        /**
         * - 淡出同层的动画状态。
         * @language zh_CN
         */
        SameLayer = 1,
        /**
         * - Fade out the animation states of the same group.
         * @language en_US
         */
        /**
         * - 淡出同组的动画状态。
         * @language zh_CN
         */
        SameGroup = 2,
        /**
         * - Fade out the animation states of the same layer and group.
         * @language en_US
         */
        /**
         * - 淡出同层并且同组的动画状态。
         * @language zh_CN
         */
        SameLayerAndGroup = 3,
        /**
         * - Fade out of all animation states.
         * @language en_US
         */
        /**
         * - 淡出所有的动画状态。
         * @language zh_CN
         */
        All = 4,
        /**
         * - Does not replace the animation state with the same name.
         * @language en_US
         */
        /**
         * - 不替换同名的动画状态。
         * @language zh_CN
         */
        Single = 5
    }
    /**
     * @private
     */
    export interface Map<T> {
        [key: string]: T;
    }
    /**
     * @private
     */
    export class DragonBones {
        public static readonly VERSION: string = "5.6.2";

        public static yDown: boolean = true;
        public static debug: boolean = false;
        public static debugDraw: boolean = false;
        public static webAssembly: boolean = false;

        private readonly _clock: WorldClock = new WorldClock();
        private readonly _events: Array<EventObject> = [];
        private readonly _objects: Array<BaseObject> = [];
        private _eventManager: IEventDispatcher = null as any;

        public constructor(eventManager: IEventDispatcher) {
            this._eventManager = eventManager;

            console.info(`DragonBones: ${DragonBones.VERSION}\nWebsite: http://dragonbones.com/\nSource and Demos: https://github.com/DragonBones/`);
        }

        public advanceTime(passedTime: number): void {
            if (this._objects.length > 0) {
                for (const object of this._objects) {
                    object.returnToPool();
                }

                this._objects.length = 0;
            }

            this._clock.advanceTime(passedTime);

            if (this._events.length > 0) {
                for (let i = 0; i < this._events.length; ++i) {
                    const eventObject = this._events[i];
                    const armature = eventObject.armature;
                    if (armature._armatureData !== null) { // May be armature disposed before advanceTime.
                        armature.eventDispatcher.dispatchDBEvent(eventObject.type, eventObject);
                        if (eventObject.type === EventObject.SOUND_EVENT) {
                            this._eventManager.dispatchDBEvent(eventObject.type, eventObject);
                        }
                    }

                    this.bufferObject(eventObject);
                }

                this._events.length = 0;
            }
        }

        public bufferEvent(value: EventObject): void {
            if (this._events.indexOf(value) < 0) {
                this._events.push(value);
            }
        }

        public bufferObject(object: BaseObject): void {
            if (this._objects.indexOf(object) < 0) {
                this._objects.push(object);
            }
        }

        public get clock(): WorldClock {
            return this._clock;
        }

        public get eventManager(): IEventDispatcher {
            return this._eventManager;
        }
    }

    if (!console.warn) {
        console.warn = function () { };
    }

    if (!console.assert) {
        console.assert = function () { };
    }
}