import { useEffect, useState } from 'react'
import { usePrompChat, usePrompMetadata } from '../openai/hooks'
import { MetadataType } from '../openai/promptMetadata'

export const ProfileImage = ({
  url = '',
}) => {

  const [fullscreenEnabled, setFullscreenEnabled] = useState(false)

  const _onEnableFullscreen = (e: boolean) => {
    setFullscreenEnabled(e)
  }

  return (
    <>
      <div className='FillParent NoPadding'
        onMouseEnter={() => _onEnableFullscreen(true)}
        onMouseLeave={() => _onEnableFullscreen(false)}
      >
        <img className='FillParent' src={url ?? ''} />
      </div>
      {fullscreenEnabled &&
        <div className='FadedCover Relative NoMouse' >
          <img className='FullscreenProfileImage' src={url ?? ''} />
        </div>
      }
    </>
  )
}

